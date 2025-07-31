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

As a part of the next auth setup we:

- added the auth.ts file
- added the route.ts file in the api folder
- added the db file in the app folder
- added the database url to the .env file

Then we'll grab the pre-built schema models for MongodDB for session management.

to do this, we generate the prisma instance with `npx prisma init`.

## DB setup

we created:

- auth.ts to use our desired providers
- added a the db.ts file to be separate from the auth.ts file
- copying the mongodb schema to the schema.prisma file
- adding user roles to the schema.prisma file

There are properties in the schema that you may not use immediately, but can be helpful for secure sign in later; like for MFA.

## Adding Github Variables

we need to add the secrets to the .env file after creating the app on Github.

## MongoDB

we create a new project for this on MongoDB Atlas.

Use the `Nodejs` package setup, not mongoose.

This requires installing the `mongodb` package. which we already have done.

Then you add the url as the environment variable.

**NOTE**: to query the desired database, we need to add the database name to the url: `mongodb+srv://aarondantley:XP10Wt6dp02JPDyV@cluster0.7y7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` wher `myFirstDatabase` is the name of the database.

This ensures you are always querying the correct database.

At the moment, there is no data, but you can add the collections to the database with the prisma client.

Run `npx prisma generate` to generate the prisma client in mongodb.

Then use `npx prisma db push` to push the collections to the database.

**NOTE**: be sure to change the `datasource` provider to `mongodb` in the schema.prisma file before running the `prisma generate` and `prisma db push` commands.

**NOTE**: pushing to the database goes through a firewall.
