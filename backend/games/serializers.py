from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import GameStats, MatchHistory, MultiplayerMatch, MultiplayerMatchParticipant

User = get_user_model()

class GameStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameStats
        fields = ('games_played', 'games_won', 'games_lost', 'total_score')
        read_only_fields = fields

from rest_framework import serializers
from .models import MatchHistory
from django.contrib.auth import get_user_model

User = get_user_model()

class MatchHistorySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())  # Current user
    username = serializers.SerializerMethodField()  # Current user's username
    avatar = serializers.SerializerMethodField()  # Current user's avatar
    opponent_avatar = serializers.SerializerMethodField()  # Opponent's avatar

    class Meta:
        model = MatchHistory
        fields = (
            'id', 'user', 'username', 'avatar', 'opponent_name', 'opponent_avatar',
            'user_score', 'opponent_score', 'result', 'date'
        )
        read_only_fields = ('user', 'username', 'avatar', 'opponent_avatar', 'result', 'date')

    def get_username(self, obj):
        # Retrieve the username of the current user
        return obj.user.username

    def get_avatar(self, obj):
        # Retrieve the avatar of the current user
        return obj.user.avatar.url if obj.user.avatar else None

    def get_opponent_avatar(self, obj):
        # Retrieve the opponent's avatar
        opponent = User.objects.filter(username=obj.opponent_name).first()
        return opponent.avatar.url if opponent and opponent.avatar else None
class MultiplayerMatchParticipantSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField()  # Add avatar field
    username = serializers.SerializerMethodField()  # Add username field

    class Meta:
        model = MultiplayerMatchParticipant
        fields = ('user', 'name', 'username', 'score', 'avatar')  # Include avatar and username
        extra_kwargs = {
            'user': {'required': False, 'allow_null': True},
            'name': {'required': False, 'allow_null': True},
        }

    def get_avatar(self, obj):
        # Retrieve the avatar of the participant
        if obj.user and hasattr(obj.user, 'avatar') and obj.user.avatar:
            return obj.user.avatar.url  # Return the avatar URL if it exists
        return '/static/default-avatar.png'  # Fallback to a default avatar

    def get_username(self, obj):
        # Retrieve the username of the participant
        if obj.user:
            return obj.user.username  # Return the username if the user exists
        return obj.name  # Fallback to the name if no user is provided

    def validate(self, data):
        # At least one of 'user' or 'name' must be provided.
        if not data.get('user') and not data.get('name'):
            raise serializers.ValidationError("Either 'user' or 'name' must be provided for a participant.")
        return data


class MultiplayerMatchSerializer(serializers.ModelSerializer):
    participants = MultiplayerMatchParticipantSerializer(many=True)
    
    class Meta:
        model = MultiplayerMatch
        fields = ('id', 'mode', 'date', 'participants')
        read_only_fields = ('id', 'date')
    
    def create(self, validated_data):
        participants_data = validated_data.pop('participants')
        match = MultiplayerMatch.objects.create(**validated_data)
        for participant_data in participants_data:
            MultiplayerMatchParticipant.objects.create(match=match, **participant_data)
        return match
