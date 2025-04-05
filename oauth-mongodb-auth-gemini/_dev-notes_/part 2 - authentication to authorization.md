# Notes

## Authorization Endpoint

We implement an authorization endpoint to receive an authorization request from the client application this endpoint does a lot:

- Receiving the authorization request from the client application
- Authenticate the user, if they aren't already,
- obtain explicit consent to grant the client application accesss to the user's resources
- generating an authorization code with a successful consent given
- redirecting the clietn back to the application with the authorization code.

This is done by the `app/api/auth/authorize/route.js` file, which handles a `GET` request as the client will redirect the user here with parameters in a query string attached to the URL.

The consent process is mocked in this endpoint, with the assumption the user would be granting consent. There is also a helper function used in this file to generate a random string to be used as the authorization code. This helper, because it's isolated and stateless, can be added to the utils directory.
