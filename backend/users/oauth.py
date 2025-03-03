from social_core.backends.oauth import BaseOAuth2

class FortyTwoOAuth2(BaseOAuth2):
    name = '42'
    AUTHORIZATION_URL = 'https://api.intra.42.fr/oauth/authorize'
    ACCESS_TOKEN_URL = 'https://api.intra.42.fr/oauth/token'
    ACCESS_TOKEN_METHOD = 'POST'
    SCOPE_SEPARATOR = ' '
    DEFAULT_SCOPE = ['public']
    
    def get_user_details(self, response):
        """Return user details from 42 account"""
        return {
            'username': response.get('login'),
            'email': response.get('email'),
            'first_name': response.get('first_name'),
            'last_name': response.get('last_name'),
            'avatar_url': response.get('image', {}).get('link'),
        }

    def user_data(self, access_token, *args, **kwargs):
        """Loads user data from service"""
        url = 'https://api.intra.42.fr/v2/me'
        return self.get_json(url, headers={
            'Authorization': f'Bearer {access_token}'
        })