import os
import time
import requests
import logging
from datetime import datetime
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

from config import config

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SharePointMockEventHandler(FileSystemEventHandler):
    """
    Handles file system events and sends webhook notifications
    Simulates how Microsoft Graph sends webhook notifications for SharePoint changes
    """
    
    def __init__(self, webhook_url: str):
        self.webhook_url = webhook_url
        self.session = requests.Session()  # Reuse connection for efficiency
        
    def send_webhook_notification(self, change_type: str, file_path: str, file_name: str):
        """Send HTTP POST to webhook server (simulates Microsoft Graph webhook)"""
        try:
            # Create webhook payload that matches our FastAPI model
            payload = {
                "value": [
                    {
                        "change_type": change_type,
                        "file_path": file_path,
                        "file_name": file_name,
                        "timestamp": datetime.now().isoformat(),
                        "resource_id": f"mock-{file_name}-{int(time.time())}"
                    }
                ]
            }
            
            logger.info(f"Sending webhook: {change_type} for {file_name}")
            
            # Send POST request to webhook server
            response = self.session.post(
                self.webhook_url,
                json=payload,
                timeout=10,
                headers={
                    "Content-Type": "application/json",
                    "User-Agent": "SharePoint-Mock-Watcher/1.0"
                }
            )
            
            if response.status_code == 200:
                logger.info(f"✅ Webhook sent successfully for {file_name}")
            else:
                logger.error(f"❌ Webhook failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            logger.error(f"❌ Error sending webhook for {file_name}: {str(e)}")
        except Exception as e:
            logger.error(f"❌ Unexpected error: {str(e)}")

    def on_created(self, event):
        """Called when a file or directory is created"""
        if not event.is_directory:
            file_path = event.src_path
            file_name = os.path.basename(file_path)
            
            logger.info(f"📁 File created: {file_name}")
            self.send_webhook_notification("created", file_path, file_name)

    def on_modified(self, event):
        """Called when a file or directory is modified"""
        if not event.is_directory:
            file_path = event.src_path
            file_name = os.path.basename(file_path)
            
            # Avoid duplicate notifications for the same file
            # (some editors trigger multiple modify events)
            logger.info(f"📝 File modified: {file_name}")
            self.send_webhook_notification("updated", file_path, file_name)

    def on_deleted(self, event):
        """Called when a file or directory is deleted"""
        if not event.is_directory:
            file_path = event.src_path
            file_name = os.path.basename(file_path)
            
            logger.info(f"🗑️ File deleted: {file_name}")
            self.send_webhook_notification("deleted", file_path, file_name)

    def on_moved(self, event):
        """Called when a file or directory is moved or renamed"""
        if not event.is_directory:
            # Treat move/rename as delete + create
            old_name = os.path.basename(event.src_path)
            new_name = os.path.basename(event.dest_path)
            
            logger.info(f"📦 File moved: {old_name} → {new_name}")
            
            # Send delete for old location
            self.send_webhook_notification("deleted", event.src_path, old_name)
            # Send create for new location  
            self.send_webhook_notification("created", event.dest_path, new_name)

class SharePointMockWatcher:
    """Main watcher class that monitors the folder and manages the observer"""
    
    def __init__(self, folder_path: str, webhook_url: str):
        self.folder_path = Path(folder_path).resolve()
        self.webhook_url = webhook_url
        self.observer = Observer()
        self.event_handler = SharePointMockEventHandler(webhook_url)
        
    def start_watching(self):
        """Start monitoring the folder"""
        # Create folder if it doesn't exist
        self.folder_path.mkdir(parents=True, exist_ok=True)
        
        logger.info(f"🔍 Starting to watch folder: {self.folder_path}")
        logger.info(f"📡 Webhook endpoint: {self.webhook_url}")
        
        # Schedule the observer
        self.observer.schedule(
            self.event_handler,
            str(self.folder_path),
            recursive=True  # Watch subdirectories too
        )
        
        # Start the observer
        self.observer.start()
        logger.info("✅ File watcher started successfully!")
        
        try:
            # Keep the watcher running
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            logger.info("🛑 Stopping file watcher...")
            self.stop_watching()
    
    def stop_watching(self):
        """Stop monitoring the folder"""
        self.observer.stop()
        self.observer.join()
        logger.info("✅ File watcher stopped")

def main():
    """Main function to run the file watcher"""
    logger.info("🚀 SharePoint Mock File Watcher Starting...")
    
    # Check if webhook server is running
    try:
        response = requests.get(f"http://{config.WEBHOOK_HOST}:{config.WEBHOOK_PORT}/")
        logger.info("✅ Webhook server is running")
    except requests.exceptions.ConnectionError:
        logger.error("❌ Webhook server is not running!")
        logger.error(f"Please start the webhook server first: python webhook_server.py")
        return
    
    # Create and start watcher
    watcher = SharePointMockWatcher(
        folder_path=config.MONITORED_FOLDER,
        webhook_url=config.WEBHOOK_URL
    )
    
    logger.info(f"Monitoring folder: {config.MONITORED_FOLDER}")
    logger.info("Try adding, editing, or deleting files in the mock_sharepoint folder!")
    logger.info("Press Ctrl+C to stop...")
    
    watcher.start_watching()

if __name__ == "__main__":
    main()