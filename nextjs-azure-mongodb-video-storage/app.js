import http from "http";
import { BlobServiceClient } from "@azure/storage-blob";
import { MongoClient } from "mongodb";
import "dotenv/config";

// local imports
import ExtractMetadata from "./utils/extract-metadata.js";
import UploadImageStream from "./utils/upload-image-stream.js";
import StoreMetadata from "./utils/store-metadata.js";

// environment variables imported
const mongodbUri = process.env.MONGODB_URI;
const accountName = process.env.ACCOUNT_NAME;
const containerName = process.env.CONTAINER_NAME;
const sasToken = process.env.SAS_TOKEN;

// connecting to blob service and container
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net/?${sasToken}`
);

// ERROR:
const containerClient = blobServiceClient.getContainerClient(containerName);

// connecting to MongoDB
const client = new MongoClient(mongodbUri);

// parens required here to instantiate
client.connect();

// server for handlling image upload
const server = http.createServer(handleImageUpload);
const port = 3000;
server.listen(port, () => {
  console.log(`server listening: ${port}`);
});

// function to handle Image Upload

async function handleImageUpload(request, response) {
  response.setHeader("Content-Type", "application/json");

  // ensuring a post request goes to right endpoint
  if (request.url === "/api/upload" && request.method === "POST") {
    try {
      // extract meta data from headers --> this is a helper function
      const { fileName, caption, fileType } = await ExtractMetadata(
        request.headers
      );

      // upload image as a stream to azure --> this is a helper function
      const imageUrl = await UploadImageStream(filename, request); // uploading image as a stream of bits

      // upload metadata to mongodb --> this is a helper function
      await StoreMetadata(fileName, caption, fileType, imageUrl);

      // return a success response
      response.writeHead(201);
      response.end(
        JSON.stringify({ message: "image and metadata uploaded successfully" })
      );
    } catch (error) {
      console.log(error);
      response.writeHead(500);
      response.end(
        JSON.stringify({ error: "Server error: upload unsuccessfull" })
      );
    }
  } else {
    response.writeHead(404);
    response.end(JSON.stringify({ error: "Not found" }));
  }
}
