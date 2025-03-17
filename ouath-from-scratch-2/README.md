<!-- markdownlint-disable MD025 -->

# Notes

video: <https://www.youtube.com/watch?v=yoiBv0K6_1U&t=14s>

## Overview of Authentication Flows

There are 3 computing functions (which can all be different virtual machines) that are needed for authentication, which are the client, the server and the database.

### Sign Up

The **SIGN UP** workflow for authentication is:

- from the _client_ the user enters their email and password or other credentials
- on the server / api the password is hashed and the data is verified and save teh user
  - this is only encrypted, and never decrypted
- on the database, the user is inserted, and sends the server the user id
- the server then creates a user session, and this user id is then used with a role to insert a session in the database
- the database then sends the session id to the server
- the server creates a session cookie
- the session cookie is sent to the client
- This session cookie signs the user in, and then the session cookie is used for additional requests to verify the user

### Sign In

The **SIGN IN** workflow for authentication is similar:

- from the _client_ the user enters their email and password or other credentials
- the server verifies the users data
- the email is used to query the database to retrieve the user information
- the user info is sent back, and the server verifies the users password
  - this step takes what string the user has entered as a password, and then hashes _that string_ and compares it to the **hashed password** in the database. If there's a match, then the rest of the flow continues
- the user id, role and other info is then used to create a session in the database
- the session ID is sent to the server
- the server creates a session cookie for the session
- the session cookie is sent to the client
- This session cookie signs the user in, and then the session cookie is used for additional requests to verify the user

### Sign In with JWT

There is also a way to **SIGN IN WITH JWT** which is (not in this video; generally not needed for security, but do have a few benefits):

- you sign from the form with email/password
- verify the data
- send email to db
- get user info from db
- send back user id
- verify password and then create a JWT
  - this is instead of creating a session, which has the users' data and role info
- this JWT is saved within a cookie
- then the JWT Cookie is returned to the user and then its used for additional requests

### Authorize Flow w/ Session

- make a request w/ the session cookie from client
- server sends session id to _database_
- grabs session info (user id and role) sends back to server
- server verifies permissions for user to make the request
- client is sent a response based on if the user has access or not to the requested URL or URI.

### Authorize Flow w/ JWT

The difference between the JWT and the session cookie is that the _JWT token does NOT require a database request_ for verifying the users permissions. Likely this saves time for displaying data to the user.

- make a request w/ JWT cookie from client
- server gets JWT cookie
- server decodes JWT cookie for the userID and role
- server verifies if the user has access rights for request
- server returns response to client based on if the user is granted access or not

## Comparison

JWT don't add a lot of benefits, but they are very complicated, with access and refresh tokens and having short access token life-span required to make this fully manageable.

Using something like redis to store session cookies is **quite close to being as fast** as a JWT token. not exactly as fast, but for saving on implementation steps, this can be a pretty good trade-off.

Also, you cannot revoke a JWT session, because you only decode a JWT token; so if the web token is valid for 7 days, if anyone else retries that token, they can act as though they were you for 7 days. This is because there is no requirement to check for an active session against a stored database.

When the session cookie is used, if a token is stolen, the session only needs to be deleted from the DB for the session to be revoked.

99.9% of the time, you get a lot of the benefits of using a memory store.

The main _drawback_ of using a session token with a memory store is that the token is _not_ readable anywhere, whereas a JWT token can be.

This means that the JWT token is best for when you have a **multi-server application**.

---

# Code base

Starts with a sign in and sign up page, with buttons. I implemented this from the [git repo](https://github.com/WebDevSimplified/custom-nextjs-authentication/blob/main/src/app/page.tsx).

created the main page to reflect the starting point code; without some of the later functions setup:

```javascript
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function HomePage() {
  const fullUser = null;

  return (
    <div className="container mx-auto p-4">
      {fullUser == null ? (
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      ) : (
        <Card className="max-w-[500px] mt-4">
          <CardHeader>
            <CardTitle>User: {fullUser.name}</CardTitle>
            <CardDescription>Role: {fullUser.role}</CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/private">Private Page</Link>
            </Button>
            {fullUser.role === "admin" && (
              <Button asChild variant="outline">
                <Link href="/admin">Admin Page</Link>
              </Button>
            )}
            <LogOutButton />
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
```

Simple Sign in form / Sign Up form:

```javascript
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SignIn() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>Sign In Form Placeholder</CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
```

