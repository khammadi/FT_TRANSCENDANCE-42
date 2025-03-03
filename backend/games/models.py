from django.db import models
from django.conf import settings

class GameStats(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    games_played = models.IntegerField(default=0)
    games_won = models.IntegerField(default=0)
    games_lost = models.IntegerField(default=0)
    total_score = models.IntegerField(default=0)
    
    def __str__(self):
        return f"Stats for {self.user.username}"


class MatchHistory(models.Model):
    """
    One-on-one match records.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    opponent_name = models.CharField(max_length=255)
    user_score = models.IntegerField()
    opponent_score = models.IntegerField()
    result = models.CharField(
        max_length=4,
        choices=[('WIN', 'Win'), ('LOSS', 'Loss'), ('DRAW', 'Draw')]
    )
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} vs {self.opponent_name} on {self.date}"


class MultiplayerMatch(models.Model):
    """
    Multiplayer match record.
    """
    MODE_CHOICES = [
        ('3P', '3 Players'),
        ('4P', '4 Players'),
    ]
    mode = models.CharField(max_length=2, choices=MODE_CHOICES)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Multiplayer Match ({self.get_mode_display()}) on {self.date}"


class MultiplayerMatchParticipant(models.Model):
    """
    A participant in a multiplayer match.
    Can be an authenticated user or simply a name.
    """
    match = models.ForeignKey(MultiplayerMatch, on_delete=models.CASCADE, related_name='participants')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    score = models.IntegerField()
    
    def __str__(self):
        if self.user:
            return f"{self.user.username} in {self.match}"
        return f"{self.name} in {self.match}"
