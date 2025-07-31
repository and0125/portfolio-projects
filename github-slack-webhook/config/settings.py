import os
from typing import Optional
from dotenv import load_dotenv

# Load environment variables from .env file
# This is the core functionality that python-dotenv provides
load_dotenv()

class Settings:
    """
    Configuration management using basic environment variables.
    
    This approach doesn't provide automatic validation like Pydantic's
    BaseSettings, but it's simpler and requires no additional dependencies.
    We're essentially building our own lightweight configuration system.
    """
    
    def __init__(self):
        """
        Initialize settings by reading from environment variables.
        We use os.getenv() to read environment variables, with the ability
        to provide default values for optional settings.
        """
        
        # Required settings - these will raise errors if missing
        self.github_webhook_secret = self._get_required_env('GITHUB_WEBHOOK_SECRET')
        self.slack_webhook_url = self._get_required_env('SLACK_WEBHOOK_URL')
        
        # Optional settings with sensible defaults
        self.environment = os.getenv('ENVIRONMENT', 'development')
        self.log_level = os.getenv('LOG_LEVEL', 'INFO')
        self.host = os.getenv('HOST', '0.0.0.0')
        
        # Convert port to integer, with error handling
        try:
            self.port = int(os.getenv('PORT', '8000'))
        except ValueError:
            raise ValueError("PORT environment variable must be a valid integer")
        
        # Perform basic validation
        self._validate_settings()
    
    def _get_required_env(self, key: str) -> str:
        """
        Helper method to get required environment variables.
        This provides clear error messages when required settings are missing.
        """
        value = os.getenv(key)
        if value is None:
            raise ValueError(f"Required environment variable {key} is not set")
        return value
    
    def _validate_settings(self):
        """
        Perform basic validation on our settings.
        This gives us some of the benefits of Pydantic's validation
        without requiring the additional dependency.
        """
        if not self.slack_webhook_url.startswith('https://hooks.slack.com/'):
            raise ValueError('SLACK_WEBHOOK_URL must start with https://hooks.slack.com/')
        
        if self.port < 1024 or self.port > 65535:
            raise ValueError('PORT must be between 1024 and 65535')
        
        valid_log_levels = ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']
        if self.log_level.upper() not in valid_log_levels:
            raise ValueError(f'LOG_LEVEL must be one of: {", ".join(valid_log_levels)}')
        
        # Normalize log level to uppercase
        self.log_level = self.log_level.upper()

# Create a global instance of our settings
settings = Settings()