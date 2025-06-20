import logging
from pathlib import Path
from datetime import datetime

logger = logging.getLogger(__name__)

class FileEventHandler:
    """Handles file change events from SharePoint (or mock folder)"""
    
    def __init__(self):
        self.processed_events = []
    
    async def handle_file_added(self, file_path: str, file_name: str):
        """Handle when a new file is added"""
        logger.info(f"📁 FILE ADDED: {file_name} at {file_path}")
        
        # Your custom logic here
        event_data = {
            "event_type": "file_added",
            "file_name": file_name,
            "file_path": file_path,
            "timestamp": datetime.now(),
            "action": "File was created"
        }
        
        self.processed_events.append(event_data)
        
        # Example actions you might take:
        # - Send email notification
        # - Log to database
        # - Trigger data processing pipeline
        # - Upload to backup storage
        
        print(f"✅ Processed file addition: {file_name}")
        return event_data
    
    async def handle_file_updated(self, file_path: str, file_name: str):
        """Handle when a file is modified"""
        logger.info(f"📝 FILE UPDATED: {file_name} at {file_path}")
        
        # Your custom logic here
        event_data = {
            "event_type": "file_updated", 
            "file_name": file_name,
            "file_path": file_path,
            "timestamp": datetime.now(),
            "action": "File was modified"
        }
        
        self.processed_events.append(event_data)
        
        # Example actions you might take:
        # - Validate file format
        # - Reprocess data
        # - Update search index
        # - Sync to other systems
        
        print(f"✅ Processed file update: {file_name}")
        return event_data
    
    async def handle_file_deleted(self, file_path: str, file_name: str):
        """Handle when a file is removed"""
        logger.info(f"🗑️ FILE DELETED: {file_name} from {file_path}")
        
        # Your custom logic here
        event_data = {
            "event_type": "file_deleted",
            "file_name": file_name,
            "file_path": file_path,
            "timestamp": datetime.now(),
            "action": "File was removed"
        }
        
        self.processed_events.append(event_data)
        
        # Example actions you might take:
        # - Clean up related data
        # - Remove from search index
        # - Archive metadata
        # - Send deletion notification
        
        print(f"✅ Processed file deletion: {file_name}")
        return event_data
    
    def get_recent_events(self, limit: int = 10):
        """Get recent processed events"""
        return self.processed_events[-limit:]