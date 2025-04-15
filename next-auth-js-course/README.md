# Notes

Video: <https://www.youtube.com/watch?v=n-fVrzaikBQ>

## Overview

Going through the latest versions of next auth and nextjs. Seemless authentication with Github, and a middleware to protect routes from non-signed in users.

## Setup

- `npm install next-auth@beta`
- create a `.env.local` file -> holds credentials for Oauth
- obtain an Oauth secret: `npx auth secret` -> generates an auth secret and adds to `.env.local` file.
- add placeholders for `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` to `.env.local`
  - could be any other Oauth provider, just using Github this time; each service has its own API. can add multiple providers.

## Obtaining credentials from Github

- go to settings > developer settings in Github
- add a new Oauth App
- name application
- set homepage url: `http://localhost:3000` for development
- set callback url: `http://localhost:3000/api/auth/callback/github`; this is one of the routes established by the next auth client.
- click create Github App
- This will provide the client ID and client secret to use as env variables

Then we can access these through Nextjs.

Also, saw this latter in the video, but you can also configure the credentials in the `nextConfig` object in the `next.config.js` file. This can add the env variables from `process.env...` I think:

```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: process.env.AUTH_GITHUB_ID,
    GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  },
};

export default nextConfig;
```

## API route setup

we create `app/api/auth/[...nextauth]/route.ts` to add the API handlers.

Then we create `auth.ts` to hold our nextauth client.

we import `nextAuth` into this file, and also the client provider into the page.

This `auth.ts` is in our project root directory, or inside the `/src` folder.

The way `auth.ts` is setup, the client will access the env variables for us. This `auth.ts` file also exports `auth, handlers, signIn, signOut` (in this order) as objects to use in other files.

We use these functions in the `route.ts` file. Then we are setup to handle the sign in, sign out, and callback functionality within our project.

## Updating Page

we update the Home page to display different items based on the authentication.

we kept this minimal, just to show the functionality.

We want to click on the button to sign in, so we use the onClick prop to do this.

However this will cause an error initially, because the onClick function is a client action, but its in a server component, so we add the `use client` at the top.

## lib for Server Actions

we create a file `lib/actions/auth.ts` for server actions related to authentication.

In this file we create a login and logout function.

---

**MY THOUGHTS**:
Then we can use this to move the client action in the `onClick` function into a client file: that is, a predefined function file, instead of using the `onClick` as a dynamic action. I think that's the difference; when it requires interaction from the client (i.e. the browser), then it's a `client` component, but nextjs component pages (i.e. files with extensions of `.tsx`) are default server components, so that's why client interactions cause issues.

Defining the interaction in a separate file, essentially abstracting the function to a server component, avoids this error; I think.

---

## Functionality

Now the button will send the user to github for authorization, and then redirect the user back to the application.

You can check the cookies for a session token in the inspect panel to ensure the user is now logged in when the same page is returned. See `application` tab in the inspect panel, then go to `cookies` in the application storage list, and then look for the `authjs` prefixed items; there is a `authjs.session-token` added as a cookie.

However, we want to use the session token to define what a user sees.

The `auth` function, from the `auth.ts` file will provide access to the session information.

We can then dynamically render content based on the user session.

## Updating UI layout

However, using the line `cost session = await auth()` makes the component you're using (i.e. Home page in this case), which makes the component Async. Async components need to be server components, so for the client action of logging in to remain in the same place, it's better to abstract the button into a component file, so that we can add the `use client` directive in that file. This ensures the button continues to function properly (because of the client action), while the page also dynamically renders (from the server).

So we move the button to a `SignInButton` component, and then import that into the home page.

Initially, we just console log the session information, and we can review it in the inspect panel console. It shows the items in the github object returned.

We know if a user is logged in or not by creating a session variable.

If there is a session user, then we know we can return the UI layout that a logged in user should see.

we added the image; but this required configuring the hostname as an acceptable place to receive data from:

```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: process.env.AUTH_GITHUB_ID,
    GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
```

This allow-lists the domain to receive images from.

## Summary

This is generally all you need to do for authentication.

---

## Authorization

We need a middleware file to restrict endpoints based on a specific user's role.

So we create a `middleware.ts` file to do this.

Then we create a route that we will protect: `app/user-info/page.tsx`.

To do this, we abstracted the logged in user's page info UI layout from the home page, and then added a link to be added when a user session is created, so that the user can click to see their information.

### Detour: Sign Out Button

copied sign in button but changed function to logout.

**NOTE**: it turns out that the middleware can't just be left alone like it was in the video; this caused my project not to render but for the tutorial it didn't do that.

Know that the middleware restricts users from access specific routes.

So we create an array of protected routes in our middleware, then export a function named middleware.

**NOTE**: I created this middleware with the project running, but I think it works best if you stop the development server and restart it.

## Adapters

This is a thing that connects your backend system to your project. Like Sqlize, Supabase, Typeform, prisma, etc.

He shows us how to setup prisma with nextauth.

### Prisma

install: `npm install @prisma/client @auth/prisma-adapter prisma`.

Then run `npx prisma init` to generate some prisma setup files. Will also create a `.env` file for your database system.

Tutor recommends using postgres, but you'd fill up the `schema.prisma` file with your models.

and then adjust your `auth.ts` file to include the prisma client.

```javascript
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
});
```

Now, depending on how you set up the prisma schema, it will automatically populate tables in the database with the user information automatically.

They already give you the schema to insert data from the authentication in the Auth.js docs.

You'd just need to copy over the tables from the documentation to use. You need the tables listed there, but you can use more than that.

Then you can include the other tables your app needs and even adjust the fields of the user properties as needed.
