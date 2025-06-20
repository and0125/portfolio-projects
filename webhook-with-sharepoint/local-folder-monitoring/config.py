import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    # Server settings
    WEBHOOK_PORT = int(os.getenv('WEBHOOK_PORT', 8000))
    WEBHOOK_HOST = os.getenv('WEBHOOK_HOST', 'localhost')
    
    # Folder monitoring
    MONITORED_FOLDER = os.getenv('MONITORED_FOLDER', './mock_sharepoint')
    
    # Webhook URL (where file_watcher will send notifications)
    WEBHOOK_URL = os.getenv('WEBHOOK_URL', f'http://localhost:{WEBHOOK_PORT}/webhook')
    
    # Webhook validation (we'll add this later for security)
    WEBHOOK_SECRET = os.getenv('WEBHOOK_SECRET', 'mock-sharepoint-secret')

# Create config instance
config = Config()