from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from datetime import datetime
import logging

from config import config
from handlers import FileEventHandler

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# FastAPI app
app = FastAPI(
    title="SharePoint Mock Webhook Server",
    description="Receives file change notifications from mock SharePoint folder",
    version="1.0.0"
)

# Webhook payload models (mimics Microsoft Graph notification structure)
class FileChange(BaseModel):
    change_type: str  # "created", "updated", "deleted"
    file_path: str
    file_name: str
    timestamp: datetime
    resource_id: Optional[str] = None

class WebhookNotification(BaseModel):
    value: List[FileChange]

# Initialize event handler
event_handler = FileEventHandler()

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "running",
        "service": "SharePoint Mock Webhook Server",
        "monitored_folder": config.MONITORED_FOLDER
    }

@app.post("/webhook")
async def receive_webhook(notification: WebhookNotification, background_tasks: BackgroundTasks):
    """
    Receive webhook notifications about file changes
    This mimics how Microsoft Graph sends webhook notifications
    """
    logger.info(f"Received webhook with {len(notification.value)} file changes")
    
    # Process each file change
    for change in notification.value:
        logger.info(f"Processing {change.change_type} for {change.file_name}")
        
        # Add to background tasks to process asynchronously
        background_tasks.add_task(
            process_file_change, 
            change.change_type, 
            change.file_path, 
            change.file_name
        )
    
    return {"status": "received", "processed_changes": len(notification.value)}

async def process_file_change(change_type: str, file_path: str, file_name: str):
    """Process individual file changes"""
    try:
        if change_type == "created":
            await event_handler.handle_file_added(file_path, file_name)
        elif change_type == "updated":
            await event_handler.handle_file_updated(file_path, file_name)
        elif change_type == "deleted":
            await event_handler.handle_file_deleted(file_path, file_name)
        else:
            logger.warning(f"Unknown change type: {change_type}")
    except Exception as e:
        logger.error(f"Error processing {change_type} for {file_name}: {str(e)}")

@app.get("/status")
async def get_status():
    """Get server status and statistics"""
    return {
        "server_status": "running",
        "monitored_folder": config.MONITORED_FOLDER,
        "webhook_url": config.WEBHOOK_URL,
        "uptime": "active"
    }

if __name__ == "__main__":
    logger.info(f"Starting webhook server on {config.WEBHOOK_HOST}:{config.WEBHOOK_PORT}")
    logger.info(f"Monitoring folder: {config.MONITORED_FOLDER}")
    
    uvicorn.run(
        "webhook_server:app",
        host=config.WEBHOOK_HOST,
        port=config.WEBHOOK_PORT,
        reload=True
    )