# Notes

video: <https://www.youtube.com/watch?v=Zq53q1sJEiM>

## Storage Account

we go in and create a storage account; give it a unique name; could change redundancy to locally-redudant storage.

can accept default from there; but for network you'll want to change the network acces to enable public access to all networks; in production this should be a restricted IP address list.

Then hit deploy to ensure all things are setup.

### Make a Container

you can make a container in your storage account, and then hit create. The container needs a name.

with that created, you'll retrive your SAS, which is the shared access signature, then hit object, and take the defaults, then hit generate.

Copy the SAS token for later; this is like the API token for accessing the blob.

## Project

starts with a blank project and uses a blank `app.mjs` file to start. He installs the azure storage blob dependencies:

- npm install --save @azure/storage-blob mongodb dotenv

Those are the 3 packages need; one for interacting with azure, then mongodb, and then grabbing the connection strings as env variables.

## Env Variables

- MONGODB_URI
- SAS_TOKEN
- ACCOUNT_NAME
- CONTAINER_NAME

We created a storage Account on Azure with a container in it, and also a mongodb cluster for tracking the metadata.

**NOTE**: he added double quotes to each env variable; I'm going to try without it, but will note if I actually do need them if it causes issues later.

## Creating a Server

see `app.mjs` for code for this.


## Test of Code

```cli
curl -X POST \
-H "Content-Type: image/png" \
-H "Content-Disposition: attachment; filename=\"mongodb-is-webscale.png\""\
-H "X-Image-Caption: teddy" \
--data-bianry @"/users.
```