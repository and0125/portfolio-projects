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
