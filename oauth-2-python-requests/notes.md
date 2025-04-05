# Notes

Implemeting Oauth with the requests library; and optimizing the workflow:

- authorizing to request an access token
- checking the access token validity
- and refreshing this access token

## Oauth Overview

There are four entities in an Oauth flow:

- User
- Client
- Authoirzation Server
- Resource Server

See the diagram below for the traffic we will need to process:

![image](./Oauth%20Diagram.png)

## Oauth Flow described

- User Access the Application
- Client redirects to the authorization server
- The authentication server asks the user to authenticate
- The user authenticates with credentials
- then the auth server requests authorization
- the user grants authentication
- then the auth server sends the authorization code to the client
- the client then sends a request with the _authorization code_ (not the request token; this is wrong in the diagram)
- Then authorization server sends back an access and refresh token to the client
- The client can then make requests to the resource server with the access token
- the protected resources are then able to be displayed by the client.

He started with a secrets.json file, which got these from google APs.

## [Self-Taught] Creating `secrets.json` File

- go to Google cloud console
- create a new project
- navigate to APIs and Services and select Credentials
- click create credentials and select Oauth client ID
- Configure the Oauth conset screen as needed; this requires you to create an Oauth configuration with the Google Auth Platform as well for a new project
- go back to the APIs and Services and select Credentials
- click create credentials and select Oauth client ID
- Now you should be prompted to create the Oauth Client ID specifically
- select the application type (web application)
- give it a name
- add a authorized JavaScript Origin (should be http://localhost because that's where or dev server will run from)
- and an authorized redirect URI (should be http://localhost:<port>/<path> I think because this is the path the user will be redirected to once authorized)
- click create

This process will bring up an Oauth Client Created screen, which will have a prompt to download the json file, which will be similar to what the tutorial started with.

## Imports

see script.py at top.
