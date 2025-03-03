from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static, serve
from rest_framework.routers import DefaultRouter
from . import views
from .views import (
    UserRegistrationView,
	UserUpdateView,
    UserListView,
	OnlineStatusView,
    Enable2FAView,
    Verify2FAView,
    UserDetailView,
	FriendshipViewSet,
    OAuth42LoginView,
    OAuth42CallbackView,
    LoginView,
    CheckAuthView,
    LogoutView,
    TwoFAStatusView,
    Verify2FALoginView,
    PasswordChangeView,
    UserLanguageView,
)

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='register'),
    path('2fa/enable/', views.Enable2FAView.as_view(), name='enable-2fa'),
    path('2fa/disable/', views.Disable2FAView.as_view(), name='disable-2fa'),
    path('2fa/verify/', views.Verify2FAView.as_view(), name='verify-2fa'),
    path('me/', views.UserDetailView.as_view(), name='user-detail'),
    path('auth/42/login/', OAuth42LoginView.as_view(), name='42-login'),
    path('auth/42/callback/', OAuth42CallbackView.as_view(), name='42-callback'),
    path('login/', LoginView.as_view(), name='login'),
    path('list/', UserListView.as_view(), name='user-list'),
	path('online-status/', OnlineStatusView.as_view(), name='online-status'),
    path('check-auth/', CheckAuthView.as_view(), name='check-auth'),  # Add this line
    path('logout/', LogoutView.as_view(), name='logout'),             # Add this line
    path('update/', UserUpdateView.as_view(), name='user-update'),
    path('friendships/send-request/', views.FriendshipViewSet.as_view({'post': 'send_request'}), name='send-friend-request'),
    path('friendships/<int:pk>/accept/', views.FriendshipViewSet.as_view({'post': 'accept_request'}), name='accept-friend-request'),
    path('friendships/<int:pk>/reject/', views.FriendshipViewSet.as_view({'post': 'reject_request'}), name='reject-friend-request'),
    path('friendships/friends-list/', views.FriendshipViewSet.as_view({'get': 'friends_list'}), name='friends-list'),
    path('friendships/pending-requests/', views.FriendshipViewSet.as_view({'get': 'pending_requests'}), name='pending-requests'),
    path('2fa/status/', views.TwoFAStatusView.as_view(), name='2fa-status'),
    path('login/2fa/verify/', views.Verify2FALoginView.as_view(), name='login-verify-2fa'),
    path('password/change/', PasswordChangeView.as_view(), name='password-change'),
    path('user/language/', UserLanguageView.as_view(), name='user-language'),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)