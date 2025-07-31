# Notes

## Overview

Simple application with a middleware and server route as a demo.

The login form will enable a login page with credentials and with github.

Will first sign a person up if they are not in the database.

Then the email id will be displayed, and once logged in you can navigate to the protected routes.

logout button to logout.

Uses Prisma ORM for this; Authjs, Prisma ORM, and mongo db.

## Coding

removed boilerplate and adding text

We'll follow the documentation as we implement.

packages: `npm install @prisma/client @auth/prisma-adapter mongodb @auth/mongodb-adapter`

Additional:

- bcryptjs
- react-icons
- @types/bcryptjs

install prisma as a dev dependency: `npm install primsa --save-dev`.

Then check package.json for packages.

One last package we need is `next-auth`.

## Setting up Next Auth

we'll use `npm install next-auth` (don't use the beta or else you may have vulnerabilities).

Then setup the environment.

Need to create a secret for the project: `npx auth secret` _NOTE_: this now creates the env file with the value.

## Auth.ts

started by creating this file in the root of the project. added what was in the video to see if it works.

We'll add the provider information to this file. We leave it blank for now.

## /api/auth/[...nextauth]/route.ts

we create a route handle in this folder.
