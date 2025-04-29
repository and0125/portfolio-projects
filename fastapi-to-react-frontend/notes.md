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

We created a basic API setup with FastAPI.

and we can test this with the live server client in VSCode.

We need to have a body to do a Post request.

Used the Postman VS code extension to test the GET and Post requests, and was able to get this to work successfully with a restart of the API endpoint.

## Frontend

we leave the API running, and created a new react project.

He created a vite project; but I just did a regular react project.

**NOTE**: on running the react project, I realized there were a lot of vulnerabilities from the base react project, so I decided to do the vite installation. Vite doesn't have a react-native setup though.

`npm create vite@latest ./ --template react`; then select `React` as the framework, and then select if you want the typescript, javascript, or remix variant (we go with javascript).

This requires you to run `npm install` as the first command; so the installer doesn't do this for you.

Once I ran that `npm install` though, the project was created without any errors.

Also, we are able to add axios with `npm install axios`, and that didn't add any vulns.

As a part of the setup, I needed to add a `components` folder as well, to ensure this existed.

We also make an `api.js` file for storing the base url of the api.

Created a simple Form component to enable the user to submit a fruit name to the API>


---

## hot wash

Got to the end but the set wasn't working. Moving on to another thing as this is pretty much completed.