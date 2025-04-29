# Notes

connecting fastAPI to a react frontend.

He has a text guide as well in the github repo; video is more in-depth.

## Overview

we'll create a react project as a frontend, and a fastapi project as a backend, and the API will handle:

- sensitive data
- storing data in DB
- authentication
- authorization
- send data back

so we're isolating these into two different services; two separate deployments as well.

So these are two microservices, and can create multiple front-ends since the backend is split out.

we'll create a new fastAPI project, and a new react project.

## Setup

- backend folder
- frontend folder
- backend venv: `python -m venv envName`
- frontend project (in frontend folder): `npx create-react-app@latest .`
- add requirements file and install: `pip install -r requirements.txt`

## Python project

we create a new `main.py` file for our backend API.

**NOTE**: fastAPI can automatically validate data going in and out of the API by defining pydantic models for your data. These model classes are at the top of this file.
