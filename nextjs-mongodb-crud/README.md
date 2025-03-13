# Notes

## Setup

packages:

- mongooose
- react-icons

## Build Steps for UI

- removed boilerplate
- removed global styling (note: with this next version and tailwind v4, we only need the `@import "tailwindcss";` line in globals.css for this to work.)
- Created nav-bar and added to layout (note: this needs to be inside the body tag, not the html tag)
- styled navbar
- added a component to the home page for the TopicsList.
  - worked back and forth to add trash and edit button to TopicsList card.
  - styled the TopicsList
  - confirmed it maintained the same styles as more TopicsList components were added to the Home page.
- created the AddTopic page.
  - styled the page (note: added a div to the main layout to move the children content down with a mt-8 class)
- Created the editTopic page:
  - We get the current title and description to pass into the Edit Topic form. We create a new component for this but used the same form from the AddTopic form.

## Build Steps for Backend

### Post Method

- create mongoDB account
- create a new project (note: mongodb by default selects a paid cluster resource, that you have to de-select to use the free option)
  - he added a username and password to use for the connection string.
  - stores this in the .env file.
  - Need to add your IP address as 0.0.0.0/0 to be able to access the MongoDB instance directly.
  - grab the connection string from the MongoDB for VScode option.
  - added connection string to .env
  - best to close the server after updating the env variables.

Connecting to mongodb:

- create a lib folder
- create a mongodb.js file for a connection client
- Then we create a model to structure our collections.
  - create a models folder
  - then a file for the particular schema and model, starting with the topic collection.
- Them we create an api folder
- then a topics folder and a route.js file for the API call.

**Debugging Notes**:

- `NextResponse` is not a default export, so it needs brackets when importing: `{ NextResponse }`
- The string name for the model in `mongoose.model("ModelName")` must match the dot operator call in the `mongoose.models.ModelName` for the or statement. Otherwise, this causes a hot reload issue, where the model is compiled multiple times unnecessarily. I had `mongoose.models.Topic` and `mongoose.model("Topics", TopicSchema)` which was a difference in the `s` at the end. so its important to make sure this is `mongoose.models.Topics` to go along with the `"Topics"` string.

- Now, we can see that there is a `test` database created with a `topics` collection added, with the new items added.

**Personal Addition**:

- modified the `mongodb.js` connection function so that it would accept a particular database name when creating records.
- note that mongodb's connection client exists for the duration of the process, so it's helpful to restart the application to be sure its connecting to the right database. This fixed the issue of going to `test.topics` instead of `topics.topics`.

Now the app can create data in the database without issue.

### Get Method

Added a get method that's very similar to the post method:

```javascript
export async function GET() {
  await MongoDBClient({ databaseName: "topics" });
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
```

### Delete Method

```javascript
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await MongoDBClient({ databaseName: "topics" });
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: `Topic ${id} deleted` }, { status: 200 });
}
```

**NOTE**: it is very important that the function name is either `DELETE` or `delete`; this should not be `Delete` -- this will cause the HTTP method to not be recognized and the method will not be allowed.

This actually deleted the object in the database.

### Update Method

we use a dynamic route for this in the api, with a folder in the `api/topics` folder called `[id]`.

**NOTE**: its key to have the `await` keyword in this line for the Update method: `const {newTitle: title, newDescription: description } = await request.json();`.

This endpoint ensures the `PUT` method works for updating entries.

### Single Topic (Retrieve) Method

this is another get command, we put this in the same `route.js` file as the update method.

## Replacing Hard Coding with API data

We want to populate the topics list with a list of the topics from the API. to do this we create a new function in TopicsList file.

```javascript
export const getTopics = async () => {
  try {
    const response = await fetch("https://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("failed to fetch topics");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
```

note that Nextjs caches responses by default, so this no-store option makes sure the request goes to the backend every time.

**Personalization**: I moved this function out of the TopicsList component into a file called `lib/apiHandlers` which I think is what I'd prefer in a larger project to keep the code isolated.

When this is used to gather the data, the component _itself_ also must become an async component, so we update the `TopicsList` to have this keyword:

```javascript
async function TopicsList() {
  const {topics} = await getTopics();
```

Then we can map through all the Topics.

**TROUBLESHOOTING**: make sure to use `http` instead of `https` when you are fetching data through the API; this is very important for connecting and gathering data that's not behind an SSL certificate.

we updated the edit link as well to pull from the MongoDB id: `<Link href={`/edit-topic/${topic.\_id}`}>`. This ensures we get the id as a url parameter for the edit topic screen.

## Adding Topics with API

This needs to be a client component to interact with the data passed in; so we add the `use client` flag at the top. Because all components are server components by default, a component would not naturally have access to the data provided from the client machine.

We want to get the client's data that's added to the input fields, and save them as state, then pass them to the API endpoint to save the data.

_NOTE_: when you have a server component, the console.log statement prints out in the terminal for the nextjs server (i.e. the terminal window in vscode). If you have a `client` component, the console.log statement outputs to the console that's visible in the inspect panel of the website running on the browser.

adding in `useState` hook to capture new information from the input fields.

We add a handleSubmit function to handle the submission of the form as well; this gets added to the `form` component, and not the `button` component; the button component needs to be changed to a `type` of `submit`.

We use the `preventDefault()` function to prevent the page from refreshing on the form submission, which is the default behavior.

With the handleSubmit function, we were able to add topics.

## Deleting a Topic

From the TopicsList component, we can send the topic ID to the remove button endpoint.

We were able to delete the topic, but we need to reload the page after the deletion so it shows up, so we use the next router to refresh the page.

## Editing a Topic

we have an EditTopic form that's a mimic of the add-topic form, but we want to already populate it with the topic information from the existing topic.

To do this, we send the topic id, title, and description to the edit form from the editTopic page.

We show that we were receiving the id correctly. then we get the specific topic by the id from the API route.
