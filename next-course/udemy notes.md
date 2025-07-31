# Notes

## Overview

taking the full udemy course on nextjs with Mongoose.

We'll use the server rendering components and server actions, rather than doing an API in this course.

Not going to explain useState, and useEffects.

Nextjs is technically a metaframework, not a framework in itself.

_PropertyPulse_: is the project for this site.

features:

- images with a photo swipe object
- social media sharing
- login with google
- messaging system for messages
- alerts for notifications
- message center for new messages
- profile page with editing properties
- dashboard
- with others
- tailwind css (will need to copy and paste this; didn't use a component library)

## Nextjs

React framework for building full-stack web apps; great for file based routing, image optimization, and SEO, api routes, etc.

Previously, all react projects were client side, with Nextjs we can take on server rendering.

For context:

- pure static website have fast load times and good SEO; but limit interactivity, and maintenance is tough because there is an html page for every page to manage.
- SPA: interactive UI and efficient updates for better user interactions. But this has a slower load time to download javascript, and SEO is challenging because content relies on javascript for rendering.
- SSR: fast initial load because there is some pre-rendered html. These are complex to implement and increases the server load especially in high traffic.
- Static site generated: blazing fast, and great for security (great for a blog or things with posts every couple days). AS content updates this entire project has to be re-built though, which is a drawback.

Nextjs features:

- file-based routing
- react server components: can render clients on the server and can use code you wouldn't normally have in the client component.
- data can be fetched without using a useEffect hook, so you don't need to show the loading time; it simplies the code too.
- server actions that can be executed on the server, and can be used with forms. Some of this is going back to how rendering on the server used to be.
- API routes can be created as well like with express or laravel, but within same stack.
- Environment variables enables configuration for different environments.
- customizable meta tags and SEO by exporting a metadata object.
- image optimization to optimize image and use lazy loading.
- Automatic code splitting for a nearly instance page loading.
- typescript support as well
- CSS support for styled components and motion.
- Fast refresh enables instant feedback on code changes
- Vercel for deployment, or netlify; much easier than a MERN application.

Using Mongo Atlas, and also compass.

Will not use github co-pilot while in the course.

