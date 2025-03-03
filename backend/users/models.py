from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.conf import settings
from django.core.exceptions import ValidationError
from django.db.models import Q

def default_avatar():
    return 'default-avatar.png'

class User(AbstractUser):
    email = models.EmailField(unique=True, verbose_name='email address')
    is_2fa_enabled = models.BooleanField(default=False)
    has_avatar = models.BooleanField(default=False)
    language = models.CharField(max_length=10, default="en")
    otp_secret = models.CharField(
        max_length=32,
        blank=True,
        null=True,
        help_text="Base32 encoded secret for TOTP authentication"
    )
    avatar = models.ImageField(
        upload_to='avatars/',
        default=default_avatar,
        blank=True
    )
    last_activity = models.DateTimeField(default=timezone.now)
    friends = models.ManyToManyField(
        'self',
        symmetrical=False,
        blank=True,
        through='Friendship',
        related_name='friend_of'
    )

    class Meta:
        ordering = ['-last_activity']
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    @property
    def is_online(self):
        return (timezone.now() - self.last_activity) <= timezone.timedelta(minutes=5)

    def clean(self):
        if User.objects.filter(email=self.email).exclude(pk=self.pk).exists():
            raise ValidationError({'email': 'This email is already in use.'})

    def __str__(self):
        return f'{self.username} ({self.email})'
    def get_language(self):
        return self.language
    def set_language(self, lang):
        self.language = lang
        self.save()
class Friendship(models.Model):
    class Status(models.TextChoices):
        PENDING = 'pending', 'Pending'
        ACCEPTED = 'accepted', 'Accepted'
        REJECTED = 'rejected', 'Rejected'

    from_user = models.ForeignKey(
        User,
        related_name='sent_requests',
        on_delete=models.CASCADE
    )
    to_user = models.ForeignKey(
        User,
        related_name='received_requests',
        on_delete=models.CASCADE
    )
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    @classmethod
    def get_friends(cls, user):
        """Get all accepted friends for a user"""
            # Friends where user sent the request and it's accepted
        sent_accepted = Friendship.objects.filter(
        from_user=user, 
        status=cls.Status.ACCEPTED
        ).values_list('to_user', flat=True)
    
    # Friends where user received the request and it's accepted
        received_accepted = Friendship.objects.filter(
            to_user=user, 
        status=cls.Status.ACCEPTED
        ).values_list('from_user', flat=True)
    
    # Combine both lists and get unique users
        friend_ids = set(list(sent_accepted) + list(received_accepted))
        return User.objects.filter(id__in=friend_ids)

    class Meta:
        ordering = ['-created_at']

    def clean(self):
        if self.from_user == self.to_user:
            raise ValidationError('Cannot friend yourself.')
        
        # Only prevent if there's an active request (pending/accepted)
        if Friendship.objects.filter(
            Q(from_user=self.from_user, to_user=self.to_user) |
            Q(from_user=self.to_user, to_user=self.from_user),
            status__in=[self.Status.PENDING, self.Status.ACCEPTED]
        ).exclude(pk=self.pk).exists():
            raise ValidationError('An active friend request or friendship already exists.')

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.from_user} → {self.to_user} ({self.status})'