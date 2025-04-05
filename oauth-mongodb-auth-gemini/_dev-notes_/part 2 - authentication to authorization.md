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

Now we can test out the success of this authorize route by constructing a URL in the browser like this:

```text
http://localhost:3000/api/auth/authorize?response_type=code&client_id=your-client-id&redirect_uri=http://localhost:3000&scope=read&state=your-random-state
```

Also, note that the redirect uri in this query parameter needs to **exactly** match the redirect uri in the authorize route list; down to the slash. Because I didn't replace the placeholders, this text request works, and redirects a user back to the home page `localhost:3000`.

**NOTE**: the authorized client object:

```javascript
const authorizedClients = {
  "your-client-id": {
    name: "Your Client Application",
    redirectUris: ["http://localhost:3000"], // Replace with your client's actual redirect URI
  },
};
```

Should **_NEVER_** be hardcoded in an application; this should be stored in a database.

Also, remember that this is currently side stepping the user authentication and consent flow simplicity, but these are critical steps of a real Oauth 2.0 flow.

Also, its essential for a state parameter to be created; the client should create a state parameter before re-directing to the authorization endpoint, and then verify that the state parameter in the redirect matches the original value.

