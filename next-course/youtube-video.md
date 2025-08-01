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

**NOTE**: pushing to the database goes through a firewall, The push was successful from home, and created the database `nexauthyt` with the tables in the schema.prisma file.

## Login with Github

go to settings; note that the Oauth instructions in Authjs docs will show how to create this as well.

on Github:

- settings
- developer settings
- click on OAuth Apps
- click on New OAuth App
- Add a name
- add `http://localhost:3000` as the origin url (this would be the url of the app for production)
- add `http://localhost:3000/api/auth/callback/github` as the callback url (substitute the url of the app for production)
- regiser the app
- copy the client id into the .env file
- generate a new client secret
- coyp the client secret into the .env file

_NOTE_: make sure `.env` is in the `.gitignore` file.

## Adding Session

Once the env variables are added, we added the session and SessionProvider to the layout.tsx file so that the session would be used in all routes of the app.

WE also added a navbar component to the navbar.tsx file.

### Troubleshooting 1

**BIG NOTE**: we updated the `db.ts` file to use a different setup of declaring the global variable for the prisma client; this is more in line with the docs.

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

However, I kept receiving this error:

```error
⨯ Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
    at [project]/db.ts [app-rsc] (ecmascript) (db.ts:12:44)
    at [project]/auth.ts [app-rsc] (ecmascript) (auth.ts:10:0)
    at [project]/app/layout.tsx [app-rsc] (ecmascript) (app\layout.tsx:4:0)
    at [project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component) (C:\Users\New User\Documents\PORTFOLIO\next-course\yt-course\.next\server\chunks\ssr\[root-of-the-server]__93bf7db5._.js:14:47)
    at Object.<anonymous> (C:\Users\New User\Documents\PORTFOLIO\next-course\yt-course\.next\server\app\page.js:15:9)
  10 | const globalForPrisma = global as unknown as { prisma: PrismaClient };
  11 |
> 12 | export const db = globalForPrisma.prisma || new PrismaClient();
     |                                            ^
  13 |
  14 | if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
  15 | {
  page: '/'
}
```

Even though I ran `npx prisma generate` before running the app. So I updated the scripts in the package.json file to include the prisma generate command.

```json
"scripts": {
    "dev": "prisma generate && next dev --turbopack",
    "build": "prisma generate && next build",
    "start": "prisma generate && next start",
    "lint": "prisma generate && next lint"
  },
```

This also did not fix the issue.

So I ended up deleting:

- the prisma folder
- the generated folder
- the node_modules folder

Then I ran `npm install`, `npx prisma init`, and `npx prisma generate` again. This deletion did fix the issue, but pointed out another issue.

### Troubleshooting 2

I ran into this error:

```error
⨯ TypeError: (0 , __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.auth) is not a function
    at RootLayout (app\layout.tsx:28:27)
  26 |   children: React.ReactNode;
  27 | }>) {
> 28 |   const session = await auth();
     |                           ^
  29 |   return (
  30 |     <SessionProvider session={session}>
  31 |       <html lang="en"> {
  digest: '3495412043'
}
```

This problem occurred because I wasn't using the latest version of the `beta` version of next-auth; which I installed with `npm install next-auth@beta`. The instructor did this, but I didn't because I thought it was unstable.

## Components

Then we updated the navbar with links, and added a login button component to the project for logging in with Github.

## Server Actions

We add an action to handle some of the functionality of the buttons on the page in the `actions` folder.

**NOTE**: this requires adding "use server" to the top of the file for the actions; and "use client" to the top of the file for the jsx components.

## Additional Components / Logic

We added components to the header to handle logging in and out for the user; and to display the user's name and image.

Added the domain for the images to the next.config.ts file.

updated api/auth/[...nextauth]/route.ts to use the handlers from the auth.ts file.
