from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from users.views import JWTCookieAuthentication  # Adjust if needed

from .models import GameStats, MatchHistory, MultiplayerMatch
from .serializers import (
    GameStatsSerializer,
    MatchHistorySerializer,
    MultiplayerMatchSerializer,
)

# ============================
# One-on-One Matches Endpoint
# ============================
class MatchHistoryView(generics.ListCreateAPIView):
    """
    Endpoint for one-on-one match records.
    
    GET: Returns all one-on-one matches for the authenticated user.
    POST: Create a new one-on-one match record.
    
    Expected POST payload:
    {
      "opponent_name": "Alice",
      "user_score": 50,
      "opponent_score": 40
    }
    """
    serializer_class = MatchHistorySerializer
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MatchHistory.objects.filter(user=self.request.user).order_by('-date')

    def perform_create(self, serializer):
        user_score = serializer.validated_data.get("user_score")
        opponent_score = serializer.validated_data.get("opponent_score")
        if user_score > opponent_score:
            result = "WIN"
        elif user_score < opponent_score:
            result = "LOSS"
        else:
            result = "DRAW"
        serializer.save(user=self.request.user, result=result)
        
        # Update the GameStats for the authenticated user.
        stats, _ = GameStats.objects.get_or_create(user=self.request.user)
        stats.games_played += 1
        stats.total_score += user_score
        if result == "WIN":
            stats.games_won += 1
        elif result == "LOSS":
            stats.games_lost += 1
        stats.save()


# ============================
# Multiplayer Matches POST Endpoint
# ============================
class MultiplayerMatchUpdateView(APIView):
    """
    Endpoint for creating (POST) a multiplayer match record.
    
    Expects a payload with:
      - Optionally, "mode" (either "3P" or "4P"; defaults to "3P")
      - "user_score"
      - "opponents": a list of opponent objects (each with "name" and "score")
    
    Example payload for a 3-player match:
    {
      "mode": "3P",
      "user_score": 50,
      "opponents": [
        { "name": "Alice", "score": 40 },
        { "name": "Bob", "score": 30 }
      ]
    }
    """
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTCookieAuthentication]

    def post(self, request):
        mode = request.data.get("mode", "3P").strip().upper()
        user_score = request.data.get("user_score")
        opponents = request.data.get("opponents")
        
        if user_score is None or opponents is None:
            return Response(
                {"detail": "Missing 'user_score' or 'opponents' field."},
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user_score = int(user_score)
        except ValueError:
            return Response(
                {"detail": "user_score must be an integer."},
                status=status.HTTP_400_BAD_REQUEST
            )
        if not isinstance(opponents, list):
            return Response(
                {"detail": "'opponents' must be provided as a list."},
                status=status.HTTP_400_BAD_REQUEST
            )
        # For mode "3P", expect 2 opponents; for "4P", expect 3 opponents.
        expected_opponents = 2 if mode == "3P" else 3
        if len(opponents) != expected_opponents:
            return Response(
                {"detail": f"Expected {expected_opponents} opponents for mode {mode}."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Build a participants list:
        # First, add the authenticated user.
        participants = [{"user": request.user.id, "score": user_score}]
        # Then add each opponent.
        for opp in opponents:
            name = opp.get("name")
            score = opp.get("score")
            if name is None or score is None:
                return Response(
                    {"detail": "Each opponent must include 'name' and 'score'."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            try:
                score = int(score)
            except ValueError:
                return Response(
                    {"detail": "Each opponent's score must be an integer."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            participants.append({"name": name, "score": score})
        
        # Create the multiplayer match record.
        serializer = MultiplayerMatchSerializer(data={"mode": mode, "participants": participants})
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        # Update GameStats for the user.
        stats, _ = GameStats.objects.get_or_create(user=request.user)
        stats.games_played += 1
        stats.total_score += user_score
        
        # Determine if there's a unique winner among participants.
        all_scores = [p["score"] for p in participants]
        max_score = max(all_scores)
        winners = [p for p in participants if p["score"] == max_score]
        if len(winners) == 1:
            if user_score == max_score:
                stats.games_won += 1
            else:
                stats.games_lost += 1
        stats.save()
        
        return Response({"detail": "Multiplayer match updated."}, status=status.HTTP_200_OK)


# ============================
# Multiplayer Matches GET Endpoint
# ============================
class MultiplayerMatchListView(generics.ListAPIView):
    """
    Endpoint for retrieving all multiplayer match records in which
    the authenticated user participated.
    
    GET: Returns a list of multiplayer matches (with nested participants)
         filtered by the current user.
    """
    serializer_class = MultiplayerMatchSerializer
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Return only multiplayer matches where the authenticated user is a participant.
        return MultiplayerMatch.objects.filter(participants__user=self.request.user).order_by('-date')


# ============================
# Game Stats Endpoint
# ============================
class GameStatsView(generics.RetrieveAPIView):
    """
    Retrieve the game statistics for the authenticated user.
    """
    serializer_class = GameStatsSerializer
    authentication_classes = [JWTCookieAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        stats, _ = GameStats.objects.get_or_create(user=self.request.user)
        return stats
