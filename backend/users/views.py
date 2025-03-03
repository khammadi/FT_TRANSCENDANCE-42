from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from social_django.utils import load_strategy, load_backend
from social_core.exceptions import MissingBackend
from rest_framework import status, generics, viewsets
from django_otp.plugins.otp_totp.models import TOTPDevice
import qrcode
import io
import base64
from .models import User, Friendship
from .serializers import UserSerializer, UserRegistrationSerializer, FriendshipSerializer, UserUpdateSerializer
from rest_framework_simplejwt.tokens import RefreshToken  # Import pour JWT
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from django.contrib.auth import authenticate, login  # Import pour l'authentification
from django.conf import settings 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import permissions  # <-- Add this import

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken
import logging
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework import status
from django.db.models import Q
from .serializers import PasswordChangeSerializer

class CheckAuthView(APIView):
    permission_classes = []

    def get(self, request):
        access_token = request.COOKIES.get('access_token')
        refresh_token = request.COOKIES.get('refresh_token')

        if not access_token:
            return Response({'is_authenticated': False}, status=status.HTTP_200_OK)

        try:
            JWTAuthentication().get_validated_token(access_token)
            return Response({'is_authenticated': True}, status=status.HTTP_200_OK)
        except (InvalidToken, TokenError):
            # Access token is invalid/expired; try refreshing with refresh token
            if not refresh_token:
                return Response({'is_authenticated': False}, status=status.HTTP_200_OK)

            try:
                refresh = RefreshToken(refresh_token)
                new_access_token = str(refresh.access_token)
                response = Response({'is_authenticated': True}, status=status.HTTP_200_OK)
                response.set_cookie(
                    key='access_token',
                    value=new_access_token,
                    httponly=True,
                    secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                    samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
                )
                return response
            except (InvalidToken, TokenError):
                return Response({'is_authenticated': False}, status=status.HTTP_200_OK)

class JWTCookieAuthentication(JWTAuthentication):
    def authenticate(self, request):
        logger.debug(f"Checking cookies: {request.COOKIES}")
        access_token = request.COOKIES.get('access_token')
        logger.debug(f"Found access token: {bool(access_token)}")
        
        # Fallback to Authorization header for non-browser clients
        if not access_token:
            header = self.get_header(request)
            if header:
                access_token = self.get_raw_token(header)

        if not access_token:
            return None

        try:
            validated_token = self.get_validated_token(access_token)
            user = self.get_user(validated_token)  # ← Get user from token
            return (user, validated_token)  # ← Correct return value
        except InvalidToken:
            return None

# Vue pour l'inscription des utilisateurs
class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()  # Create the user

        # Return user data and a success message
        response_data = {
            'user': UserSerializer(user).data,
            'message': 'Registration successful. Please log in.',
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
# Vue pour obtenir les détails de l'utilisateur connecté
class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated] 
    def get_object(self):
        return self.request.user

# Vue pour activer la 2FA
import logging

logger = logging.getLogger(__name__)
class Enable2FAView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def post(self, request):
        logger.info("Enable2FAView post method called")
        
        user = request.user
        if not user.is_authenticated:
            logger.error("User is not authenticated")
            return Response({'error': 'User is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            # Delete existing devices if any
            logger.info("Deleting existing TOTP devices for user: %s", user.username)
            TOTPDevice.objects.filter(user=user).delete()

            # Create new TOTP device
            logger.info("Creating new TOTP device for user: %s", user.username)
            device = TOTPDevice.objects.create(
                user=user,
                name="default",
                confirmed=False  # Mark as unconfirmed until verified
            )

            # Generate QR code
            logger.info("Generating QR code for TOTP device")
            qr = qrcode.QRCode(
                version=1,
                box_size=10,
                border=4
            )
            qr.add_data(device.config_url)
            qr.make(fit=True)
            img = qr.make_image(fill_color="black", back_color="white")

            # Convert to base64
            buffer = io.BytesIO()
            img.save(buffer)  # Remove the format argument
            qr_code = base64.b64encode(buffer.getvalue()).decode()

            logger.info("2FA enabled successfully for user %s", user.username)
            
            return Response({
                "qr_code": qr_code,
                "secret": device.config_url.split('secret=')[1].split('&')[0],
                "message": "Scan this QR code with your authenticator app"
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            logger.error("An error occurred: %s", str(e))
            return Response({'error': 'An error occurred while enabling 2FA'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class Disable2FAView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        if not user.is_2fa_enabled:
            return Response({'error': '2FA is not enabled'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Delete TOTP devices and disable 2FA
        TOTPDevice.objects.filter(user=user).delete()
        user.is_2fa_enabled = False
        user.save()
        
        return Response({'success': '2FA has been disabled'}, status=status.HTTP_200_OK)
class Verify2FAView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def post(self, request):
        logger.info("Verify2FAView post method called")
        
        user = request.user
        token = request.data.get('token')
        
        if not token or len(token) != 6:
            logger.error("Invalid token provided")
            return Response(
                {'error': 'Valid 6-digit token is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            device = TOTPDevice.objects.get(user=user)
            if device.verify_token(token):
                # Activate 2FA only after successful verification
                user.is_2fa_enabled = True
                user.save()
                device.confirmed = True
                device.save()
                logger.info("2FA verified successfully for user %s", user.username)
                return Response({'success': True})
            
            logger.error("Invalid token for user %s", user.username)
            return Response(
                {'error': 'Invalid token'},
                status=status.HTTP_400_BAD_REQUEST
            )
        except TOTPDevice.DoesNotExist:
            logger.error("2FA not configured for user %s", user.username)
            return Response(
                {'error': '2FA not configured for this user'},
                status=status.HTTP_400_BAD_REQUEST
            )
class Verify2FALoginView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logger.info("Verify2FALoginView post method called")
        
        user = request.user
        token = request.data.get('token')
        
        if not token or len(token) != 6:
            logger.error("Invalid token provided")
            return Response(
                {'error': 'Valid 6-digit token is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            device = TOTPDevice.objects.get(user=user)
            if device.verify_token(token):
                logger.info("2FA login verified successfully for user %s", user.username)
                return Response({'success': True, 'message': '2FA login successful'})
            
            logger.error("Invalid token for user %s", user.username)
            return Response(
                {'error': 'Invalid token'},
                status=status.HTTP_400_BAD_REQUEST
            )
        except TOTPDevice.DoesNotExist:
            logger.error("2FA not configured for user %s", user.username)
            return Response(
                {'error': '2FA not configured for this user'},
                status=status.HTTP_400_BAD_REQUEST
            )
# Vue pour l'authentification OAuth 42
class OAuth42LoginView(APIView):
    permission_classes = []

    def get(self, request):
        strategy = load_strategy(request)
        backend = load_backend(strategy=strategy, name='42', redirect_uri='http://localhost:8000/api/users/auth/42/callback/')
        
        # Générer l'URL d'autorisation
        auth_url = backend.auth_url()
        return Response({'auth_url': auth_url})
 
# Vue pour le callback OAuth 42
class OAuth42CallbackView(APIView):
    permission_classes = []

    def get(self, request):
        code = request.GET.get('code')
        if not code:
            return Response({'error': 'No code provided'}, 
                          status=status.HTTP_400_BAD_REQUEST)

        strategy = load_strategy(request)
        backend = load_backend(strategy=strategy, name='42', redirect_uri='http://localhost:8000/api/users/auth/42/callback/')

        try:
            # Compléter le processus d'authentification
            user = backend.complete(request=request)
            
            # Générer les tokens JWT
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            # Renvoyer les informations de l'utilisateur et les tokens JWT dans des cookies
            response = Response({
                'user': UserSerializer(user).data,
                'message': 'Successfully authenticated'
            })

            response = redirect("http://localhost:3000/")
            # Ajouter les tokens dans des cookies
            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='Lax',
            )
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='Lax',
            )

            return response
        except Exception as e:
            return Response({'error': str(e)}, 
                          status=status.HTTP_400_BAD_REQUEST)
# Vue pour la connexion avec e-mail et mot de passe
# Django View
class TwoFAStatusView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({"is_2fa_enabled": user.is_2fa_enabled}, status=status.HTTP_200_OK)
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response(
                {'error': 'Username and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        user = authenticate(request, username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            response = Response({
                'user': UserSerializer(user).data,
                'message': 'Login successful'
            })
            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=False,
                samesite='Lax',
                max_age=int(settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'].total_seconds()),  # Convert timedelta to seconds
            )
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite='Lax',
                max_age=int(settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'].total_seconds()),
            )

            return response
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

# Vue pour la déconnexion
class LogoutView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        response = Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        
        # Clear the JWT cookies
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        
        return response
    
    #friends for ever
class FriendshipViewSet(viewsets.ModelViewSet):
    serializer_class = FriendshipSerializer
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Return friendships involving the current user.
        return Friendship.objects.filter(
            Q(from_user=self.request.user) | Q(to_user=self.request.user)
        )

    @action(detail=False, methods=['post'], url_path='send-request')
    def send_request(self, request):
        to_user_id = request.data.get('to_user_id')
        try:
            to_user = User.objects.get(pk=to_user_id)
        except User.DoesNotExist:
            return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        if request.user == to_user:
            return Response({"detail": "Cannot send request to yourself."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if a friendship or request already exists in either direction.
        if Friendship.objects.filter(
            Q(from_user=request.user, to_user=to_user) |
            Q(from_user=to_user, to_user=request.user)
        ).exists():
            return Response({"detail": "Friend request already exists."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            friendship = Friendship.objects.create(
                from_user=request.user,
                to_user=to_user,
                status='pending'
            )
            friendship.full_clean()  # Validate the model instance.
        except ValidationError as e:
            return Response({"detail": e.messages}, status=status.HTTP_400_BAD_REQUEST)

        return Response(self.get_serializer(friendship).data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'], url_path='accept')
    def accept_request(self, request, pk=None):
        friendship = self.get_object()
        if friendship.to_user != request.user:
            raise PermissionDenied("Not authorized to accept this request")
        if friendship.status != 'pending':
            raise ValidationError("Request is not pending")
        friendship.status = 'accepted'
        friendship.save()
        return Response(self.get_serializer(friendship).data)

    @action(detail=True, methods=['post'], url_path='reject')
    def reject_request(self, request, pk=None):
        friendship = self.get_object()
        if friendship.to_user != request.user:
            raise PermissionDenied("Not authorized to reject this request")
        friendship.status = 'rejected'
        friendship.save()
        return Response(self.get_serializer(friendship).data)

    # New action: pending_requests
    @action(detail=False, methods=['get'], url_path='pending-requests')
    def pending_requests(self, request):
        # Return all pending friend requests where the current user is the recipient.
        pending = Friendship.objects.filter(to_user=request.user, status='pending')
        serializer = self.get_serializer(pending, many=True)
        return Response(serializer.data)

    # New action: friends_list
    @action(detail=False, methods=['get'], url_path='friends-list')
    def friends_list(self, request):
        # Get all accepted friendships involving the current user.
        accepted_friendships = Friendship.objects.filter(
            Q(from_user=request.user, status='accepted') |
            Q(to_user=request.user, status='accepted')
        )
        # Build a list of friend users.
        friends = []
        for friendship in accepted_friendships:
            # If the current user is the sender, the friend is the receiver, and vice versa.
            if friendship.from_user == request.user:
                friends.append(friendship.to_user)
            else:
                friends.append(friendship.from_user)
        # Serialize the list of friend users.
        serializer = UserSerializer(friends, many=True)
        return Response(serializer.data)
class OnlineStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Fetch all users and their online status
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
class UserUpdateView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        user = request.user
        serializer = UserUpdateSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserListView(generics.ListAPIView):
    authentication_classes = [JWTCookieAuthentication]  # Must be explicit
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        # Get all users, excluding the currently logged-in user
        return User.objects.exclude(id=self.request.user.id)

class PasswordChangeView(APIView):
    authentication_classes = [JWTCookieAuthentication]  # Must be explicit
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = PasswordChangeSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Password updated successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserLanguageView(APIView):
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Get the user's current language."""
        return Response({"language": request.user.get_language()}, status=status.HTTP_200_OK)

    def patch(self, request):
        """Update the user's language."""
        new_language = request.data.get("language")
        if not new_language:
            return Response({"error": "Language is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        request.user.set_language(new_language)
        return Response({"message": "Language updated successfully", "language": new_language}, status=status.HTTP_200_OK)