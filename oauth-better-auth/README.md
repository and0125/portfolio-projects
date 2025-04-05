# Better Auth Setup

- installation: `npm install better-auth`
- add secret to .env file: `BETTER_AUTH_SECRET=`
- add base URL to .env file: `BETTER_AUTH_URL=http://localhost:3000`
- Create an Auth Instance in `utils/auth.ts`.

```javascript
// utils/auth.ts
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  //...
});
```

- Configure a database because better auth requires a database to store the user data. can use sqllite to do this locally or other databases too. Using mongodb this becomes:

```javascript
// utils/auth.ts
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db"; // your mongodb client

export const auth = betterAuth({
  database: mongodbAdapter(client),
});
```

Which means you'd need a mongodb client file to start this.

## MongoDB Client Info

Switched an older to project to use with this project in mongodb. updated the connection variables to work with the older cluster.

## Connecting MongoDB to Better Auth

Note that the MongoDB adapter for better auth is not expecting a detailed sort of custom client class; its expecting a raw database object. So we no longer have wrapper functions, we have direct function exports for common operations. This should work with the authentication properly.
