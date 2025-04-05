# Notes

Ability to sign up with clerk with facebook, github, google, and also to create an account directly. Creating an Avatar, managing an account, singing in and out. changing the avata to upload the avatar image to clerk storage, change user name, adding more email addresses. etc.

Can also delete the account or change the password. All these features are available through clerk, and can integrate this with clerk. All data will be stored in MongoDB with mongoose to do CRUD operations for the account.

Deploying this to vercel for free.

Going to use all the features within clerk, like using webhooks to connect to mongodb.

## Setup

create a diagram for the folders and files in the Eraser document: <https://app.eraser.io/workspace/eetNFuVlXM44UbbRb8bC>. This shows the folders and files to be created.

cleaned up page.js to remove everything and just created a plain `rfc` component.

## Header creation

adding header to layout.js file; which will adjust the layout for every page we create (the root layout). We want to create a header file and put it into the layout.js file.

added an about page too.

created the logo with gradients, and used a group to group the hover behavior of the two words in the logo

## Clerk Setup

working on the sign in, sign up, and sign out functionality with Clerk.

We'll add the logo and custom text on the Clerk Oauth login screen.

We'll also be able to create and change the user information very easily with this application.

The sign up page will have all the providers as well as fields for the user to sign up with as well.

To create these pages we need a folder for `sign-in` and one for `sign-up` but then within these folders you need a folder named `[[...sign-in]]` and `[[...sign-up]]` respectively.

- We import clerk: `npm install @clerk/nextjs`.
- we grab the env variables and add to a new `.env.local` file.
- we use clerk's provided code to create a middleware file `middleware.js` folder.

Clerk middleware:

```javascript
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```

The next big step is using the clerk provider so the whole application is protected by clerk; we add this to our `layout.js` file:

```javascript
<ClerkProvider>
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header />
      {children}
    </body>
  </html>
</ClerkProvider>
```

There will be a slight delay moving between pages when clerk is added, because of the check for authentication. WE can use two other components: ClerkLoaded, and ClerkLoading, to determine when the screen is done loading. These are also added to the layout file:

```javascript
<ClerkProvider>
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* loading display */}
      <ClerkLoading>
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center">
          Loading...
        </div>
      </ClerkLoading>
      {/* display once loaded */}
      <ClerkLoaded>
        <Header />
        {children}
      </ClerkLoaded>
    </body>
  </html>
</ClerkProvider>
```

Then we create another component that displays when we are loading called the loader; in the components file. This way we can have a nice loading screen or animation:

```javascript
import React from "react";

/**
 * Loading display: creates the common loading circle
 */
export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-10 w-10"></div>
    </div>
  );
}
```

### Clerk Pages

Then we just use the code provided for the sign in and sign up pages by placing them in the routes specified.

sign in template code:

```javascript
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
```

sign up:

```javascript
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}
```

Both pages functioned properly at this point.
