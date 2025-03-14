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
