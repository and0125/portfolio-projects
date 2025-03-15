# Notes

## Oauth Overview

Oauth 2.0 is giving a user a special key to control who gets access to the data. it enables 3rd party applications to access user data. Oauth 1.0 was complex and not as widely supported. Oauth 2.0 was released in 2012, which provided a number of features and improvements. This is a safe and secure way to let websites access your data without sharing your password.

We'll go over Oauth 1.0 and 2.0, and the four different flows of Oauth.

Oauth is a way for two websites to talk without using your password. For example, you use google's oauth 2.0 service to give an application a token to access your data, the _access token_, which allows an application to access protected resources within a users account.

When the user wants to access a websites' services, the website then makes a request to an authorization server. Once the user is authorized in the authorization server, the auth server returns a token. Then the client application uses this token to make a request to a resource server, and the resource server returns the client's protected data based on the access token.

This access token is an `authorization Bearer <token>` in the header inside the request.

flow:

- user visits application, wants to log in via a 3rd party oauth provider.
- the user is directed from the application to the authorization server.
- The user enters their username and password.
- the authorization server generates an access token.
- The application stores the access token to make a request to the resource server.
- the application makes a request with the token to the resource server.
- the resource server returns the protected resources.

The google API is just validating the access token, and grants access to the resources.

JSON web tokens (or JWT), is a different protocol, but they can work together to provide access to an application.

To integrate JWT with oauth 2.0, there is an additional step:

- user visits applicaiton, wants to log in via a 3rd party oauth provider.
- the user is directed from the application to the authorization server
- the user enters their name and password
- the authorization server generates an access token.
- The application stores the access token for making requests to the resource server
- _Extra step_: the client application turns the access token into a JWT token (**encoding**)
- the JWT token is then **decoded** by the resource server
- The resource server grants access with the JWT

JWT are great because they are self-contained and easily verified by the resource servers, making them more secure than opaque tokens, they are also easy to transmit so they are more efficient. They are also versatile and adaptable for multiple

JWTs are a common way to implement row and column-based access control to data for fine-grained authorization.

A JWT payload, once decoded, can look like:

```json
{
  "sub": "user123",
  "roles": ["analyst", "marketing"],
  "permissions": {
    "customers": {
      "allowedColumns": ["id", "name", "email"],
      "restrictedColumns": ["credit_card", "ssn"],
      "rowFilters": "department_id = 5"
    }
  }
}
```

This adaptability helps make this Oauth authentication.

This way the JWT and Oauth 2.0 are two _different_ protocols; but they can be used together for protecting resources. WHen combined, they are called a `Single Sign On` or `SSO`.

There are also cases where the authorization server is an identity provider, but the identity provider and authorization server are two different servers in Oauth 2.0. The authorization server is solely for providing the access token, the identity provider is responsible for authenticating users.

Some Oauth flows have the identity provider and authorization server as the same.

## Common Oauth Flows

### Authorization Code Flow

- most common; when needing to access protected resources on users behalf
- User authenticates with identity provider
- the identity provider redirects user to the application with authorization code
- the application sends auth code to auth server, which validates the code, and returns an access and refresh token
- the app can then use the access token to make requests for resources.

This access token would contain:

- client_id
- client_secret
- scope
- state
- redirect_uri

### Client Credentials Flow

- for when the application needs to access its own protected resources; not accessing protected resources on behalf of the user
- client sends a request to authorization server
- auth server returns access token
- application can then make request to resource server

This access token would contain:

- client_id
- client_secret
- scope

### Resource Owner Password Flow

- when app needs to access protected resources, but the user doesn't want to be redirected to the identity provider
- user gives username and password to client app
- this gets sent to authorization server
- this returns an access token
- the client application uses the token to make requests of the resource server

this access token would contain:

- client_id
- client_secret
- scope

### Implicit flow

- simpler authorization code flow; used to directing user back to application with token in the url for the application to make requests
  - this is not recommended for most applications
  - didn't go through with this.

## Summary

Best flow depends on application. Oauth 2.0 is the default standard for authorization.

---

# Authentication Flow in Nextjs

video: <https://www.youtube.com/watch?v=Otq0LY90Qso>

walk through complete authentication flow without a library; rolling own auth. Whether to do this in production is up to us; but this is a good way to see the mental model for Oauth.

Using all best practices, and design patterns to properly handle authentication.

## Visual Example and Steps of Authentication

Using eraser for whiteboarding.

to implement auth you need a client and server, and these have different responsibilities.

Client is anything that is user facing or living on the browser; what the user interacts with. A user will see a form to enter their credentials in. So we'd need to create a login form. This login form would have an email and password, and would be sent to the server which sends the email/password directly to the server, and the server will handle the validation.

The loginform will need a function to send data to the server; once of these is a server action. Server actions are the responsibility of the server to call with the email and password.

The server, once it does the validation, it will communicate a response to the login form component, which will use a `useActionState`. This works with a server action and this will display so information back to the user. Then the user can take action to fix any errors. This will give some state variables like loading and errors, which will be returned to the login form to be displayed to the user.

THe server receives credentials, then the server will validate the data, which will have two outcomes; either an error or a success.

if an error, that error will be directly returned to the login form, which will be received as the state variable.

If everything is validated, this will create a JWT token to be stored in a cookie safely to ensure the user is validated and has access to the application.

The JWT token is then going to get stored in something that is called an `HTTP-only secure cookie`, which means that this cookie cannot be read by javascript on the client; it can only be read by the server.

The last piece we need is to be able to determine if the user can access specific routes. And this happens through a middleware, which is determined by the secure cookie. The middleware checks the cookie, which determines what the user is allowed to see or not.

So we have a client and server.

## Implementation

github repository: <https://github.com/cosdensolutions/code/blob/master/videos/long/auth-flow-next-js/src/app/lib/session.ts>

### Starting setup

- login/login-form.tsx: basic form w/ submit button and input fields
- login/page.tsx: basic page with just loginform component
- dashboard/page.tsx: a page with plain text
- lib/session.ts: has the following:
  - SessionPayload Type
  - SecretKey and encodedKey instantiation
  - encrypt function
  - decrypt function
  - grabbed createSession from github repo
  - grabbed deleteSession from github repo
