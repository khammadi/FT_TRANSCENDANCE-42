import requests
import os
import logging
from django.core.files.base import ContentFile

logger = logging.getLogger(__name__)

def save_avatar(backend, user, response, *args, **kwargs):
    """Download and save avatar from 42 Intra"""
    if backend.name == '42':
        avatar_url = response.get('image', {}).get('link')
        
        if avatar_url and not user.has_avatar:
            try:
                response = requests.get(avatar_url, timeout=10)
                response.raise_for_status()
                
                # Generate unique filename
                filename = f"avatar_{user.id}_{avatar_url.split('/')[-1]}"
                
                # Save to ImageField
                user.has_avatar = True
                user.avatar.save(
                    filename,
                    ContentFile(response.content),
                    save=True
                )
                logger.info(f"Saved avatar for user {user.username}")
            except requests.exceptions.RequestException as e:
                logger.error(f"Failed to download avatar: {str(e)}")
            except Exception as e:
                logger.error(f"Error saving avatar: {str(e)}")