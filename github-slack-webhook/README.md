# Notes

## Overview

a practical webhook application integrating Github and Slack.

This project sends a notification to Slack each time code is pushed to a repository, pull requests are crated, or issues are opened.

## Basic implementation flow

Set up a Flask/FastAPI endpoint to receive POST requests
Validate the GitHub webhook signature for security
Parse the JSON payload to extract relevant info (repo, author, commit message)
Send notification via email, Slack API, or Discord webhook
Return proper HTTP status codes
