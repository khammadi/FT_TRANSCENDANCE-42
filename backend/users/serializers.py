from rest_framework import serializers
from .models import User, Friendship
from django.conf import settings

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {
            'email': {'required': True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserSerializer(serializers.ModelSerializer):
    is_online = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_2fa_enabled', 
                 'avatar_url', 'is_online', 'friends', 'last_activity')
        read_only_fields = ('is_2fa_enabled', 'last_activity')

    def get_is_online(self, obj):
        return obj.is_online

    def get_avatar_url(self, obj):
        if obj.avatar:
            return obj.avatar.url
        return f'{settings.MEDIA_URL}{settings.DEFAULT_AVATAR}'
class FriendshipSerializer(serializers.ModelSerializer):
    from_user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    to_user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    from_user_avatar_url = serializers.SerializerMethodField()  # Avatar of from_user
    to_user_avatar_url = serializers.SerializerMethodField()    # Avatar of to_user

    class Meta:
        model = Friendship
        fields = ('id', 'from_user', 'to_user', 'status', 'created_at', 
                  'from_user_avatar_url', 'to_user_avatar_url')
        read_only_fields = ('from_user', 'to_user', 'created_at')

    def get_from_user_avatar_url(self, obj):
        # Get the avatar URL of the from_user
        if obj.from_user.avatar:
            return obj.from_user.avatar.url
        return f'{settings.MEDIA_URL}{settings.DEFAULT_AVATAR}'

    def get_to_user_avatar_url(self, obj):
        # Get the avatar URL of the to_user
        if obj.to_user.avatar:
            return obj.to_user.avatar.url
        return f'{settings.MEDIA_URL}{settings.DEFAULT_AVATAR}'

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'avatar')
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False, 'read_only': True},
            'avatar': {'required': False}
        }
    def update(self, instance, validated_data):
        # Handle avatar reset to default
        if 'avatar' in validated_data and validated_data['avatar'] is None:
            if instance.avatar.name != settings.DEFAULT_AVATAR:
                instance.avatar.delete(save=False)
            instance.avatar = settings.DEFAULT_AVATAR
        return super().update(instance, validated_data)

class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True, write_only=True)
    new_password = serializers.CharField(required=True, write_only=True)

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is not correct.")
        return value

    def validate_new_password(self, value):
        # Add any additional validations for the new password if needed
        if len(value) < 8:
            raise serializers.ValidationError("New password must be at least 8 characters long.")
        return value

    def save(self, **kwargs):
        user = self.context['request'].user
        new_password = self.validated_data['new_password']
        user.set_password(new_password)  # This properly hashes the password.
        user.save()
        return user