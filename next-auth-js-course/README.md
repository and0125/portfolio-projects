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

## API route setup

we create `app/api/auth/[...nextauth]/route.ts` to add the API handlers.

Then we create `auth.ts` to hold our nextauth client.

we import `nextAuth` into this file, and also the client provider into the page.

This `auth.ts` is in our project root directory, or inside the `/src` folder.

The way `auth.ts` is setup, the client will access the env variables for us. This `auth.ts` file also exports `auth, handlers, signIn, signOut` (in this order) as objects to use in other files.

We use these functions in the `route.ts` file. Then we are setup to handle the sign in, sign out, and callback functionality within our project.

## Updating Page

we update the Home page to display different items based on the authentication.
