import hashlib
import json
import os 
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path 
from urllib.parse import parse_qsl, urlencode
import requests


"""
Defining scopes to authorize with
- using Google Scopes
- couldn't do this without accounts
- these scopes don't have to be urls, but google makes these scopes Urls
- can use as many or as few scopes here; depends on the API you want to connect to
"""
SCOPES = [
    "https://www.googleapis.com/auth/yt-analytics.readonly",
    "https://www.googleapis.com/auth/yt-analytics-monetary.readonly"
]

HOST = "localhost"
PORT = 3000

if __name__ == "__main__":
    secrets = json.loads(Path("secrets.json").read_text())['web'] 

    tokens = 