# users/tests.py
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import Friendship
from django_otp.plugins.otp_totp.models import TOTPDevice
import pyotp

User = get_user_model()

class AuthenticationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'Testpass123!'
        }

    def test_user_registration(self):
        url = reverse('register')
        response = self.client.post(url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username='testuser').exists())

    def test_user_login(self):
        # Create user first
        User.objects.create_user(**self.user_data)
        url = reverse('login')
        response = self.client.post(url, {
            'username': 'testuser',
            'password': 'Testpass123!'
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access_token', response.cookies)

class TwoFactorAuthTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass'
        )
        self.client.force_authenticate(user=self.user)

    def test_enable_2fa(self):
        url = reverse('enable-2fa')
        response = self.client.post(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(TOTPDevice.objects.filter(user=self.user).exists())

    def test_verify_2fa(self):
        device = TOTPDevice.objects.create(user=self.user, name='test')
        totp = pyotp.TOTP(device.bin_key)
        valid_token = totp.now()
        
        url = reverse('verify-2fa')
        response = self.client.post(url, {'token': valid_token})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class FriendshipTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user1 = User.objects.create_user(
            username='user1',
            email='user1@example.com',
            password='testpass'
        )
        self.user2 = User.objects.create_user(
            username='user2',
            email='user2@example.com',
            password='testpass'
        )
        self.client.force_authenticate(user=self.user1)

    def test_send_friend_request(self):
        url = reverse('friendships-send-request')
        response = self.client.post(url, {'to_user_id': self.user2.id})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Friendship.objects.count(), 1)

    def test_accept_friend_request(self):
        friendship = Friendship.objects.create(
            from_user=self.user2,
            to_user=self.user1,
            status='pending'
        )
        url = reverse('friendships-accept-request', args=[friendship.id])
        response = self.client.post(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        friendship.refresh_from_db()
        self.assertEqual(friendship.status, 'accepted')

class ProfileTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass'
        )
        self.client.force_authenticate(user=self.user)

    def test_update_profile(self):
        url = reverse('user-update')
        new_data = {'username': 'newusername', 'email': 'new@example.com'}
        response = self.client.patch(url, new_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertEqual(self.user.username, 'newusername')

    def test_avatar_upload(self):
        url = reverse('user-update')
        avatar = SimpleUploadedFile("avatar.jpg", b"file_content", content_type="image/jpeg")
        response = self.client.patch(url, {'avatar': avatar}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertIn('avatar.jpg', self.user.avatar.name)

    def test_default_avatar(self):
        self.assertEqual(self.user.avatar_url, '/media/default-avatar.png')

class OnlineStatusTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass'
        )
        self.client.force_authenticate(user=self.user)

    def test_online_status(self):
        url = reverse('user-detail')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_online'])