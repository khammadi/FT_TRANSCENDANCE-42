from django.urls import path
from .views import GameStatsView, MultiplayerMatchUpdateView
from .views import MatchHistoryView,  MultiplayerMatchListView

urlpatterns = [
    path('stats/', GameStatsView.as_view(), name='game-stats'),
    path('match-history/', MatchHistoryView.as_view(), name='match-history'),
    path('stats/update/multiplayer/', MultiplayerMatchUpdateView.as_view(), name='update-multiplayer'),
	path('stats/multiplayer/', MultiplayerMatchListView.as_view(), name='multiplayer-match-list'),
]
