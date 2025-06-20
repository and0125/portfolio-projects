# Notes

## Method 1: Watchdog for Local Folder Monitoring

the first method of doing this, to understand the structures and concepts of working with a webhook, was to use a watchdog system to monitor a local folder.

This has the following architecture:

`Local Folder (simulates sharepoint) → File Watcher → HTTP POST → Webhook Server → Event Handlers`

Using the python package `watchdog` this setup will monitor a folder `mock_sharepoint/` for updates. Then simulate a webhook by sending HTTP POST requests to a local server. The Webhook server will receive the notifications and process them. The event handler will handle the add/update/delete functions like a real sharepoint folder.

### Setup

- venv and project directory
- install packages: `watchdog fastAPI uvicorn requests python-dotenv`
- create basic file structure
- set up configuration

### basic FastAPI server

Copied suggest environment configuration into .env file.

created a config.py file then create a fastAPI webhook for file events. This configuration file centralizes all settings in one place to load them from environment variables for security and flexibility. It reads the `.env` file for the system environment, and keeps sensitive data out of your code. It creates a class to hold all of your configuration values. This makes the settings organized and provides easy access to them throughout your app. Then uses an environment variable pattern to retrive an environment variable by name, and to set a default variable value of the .env variable isn't set. It sets up the monitored folder, the webhook url, the webhook secret token as well. and points to the `/webhook` endpoint for the webhook url. Then this file creates a global instance of the Config object with `config = Config()`.

Then other files can import this configuration setup with `from config import config`.

Then the `webhook_server.py` file sets up the basic FastAPI webhook server, and this uses the event_handler object from the `handlers.py` file to process files for creation, update, and deletion.

### File Watcher Implementation

The file watcher has two classes: one for SharepointMockEventHandlers and one for SharepointMockWatchers. These two items handle the event triggered from the sharepoint folder.

The notiifcation structure the webhook will use is defined below:

```python
payload = {
    "value": [
        {
            "change_type": "created",  # or "updated", "deleted"
            "file_path": "/full/path/to/file.txt",
            "file_name": "file.txt",
            "timestamp": "2025-06-19T10:30:00",
            "resource_id": "mock-file.txt-1687172400"
        }
    ]
}
```
