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
