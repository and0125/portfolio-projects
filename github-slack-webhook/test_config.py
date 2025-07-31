from config.settings import settings

def test_configuration():
    """
    Simple test to verify our configuration loads correctly.
    Run this to make sure your .env file is set up properly.
    """
    print("Configuration loaded successfully!")
    print(f"Environment: {settings.environment}")
    print(f"Log Level: {settings.log_level}")
    print(f"Host: {settings.host}")
    print(f"Port: {settings.port}")
    
    # Only show first/last few characters of secrets for security
    print(f"GitHub Secret: {settings.github_webhook_secret[:8]}...{settings.github_webhook_secret[-8:]}")
    print(f"Slack URL: {settings.slack_webhook_url[:30]}...")

if __name__ == "__main__":
    test_configuration()