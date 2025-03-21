import { MongoClient } from "mongodb";
import "dotenv/config";

const mongodbUri = process.env.MONGODB_URI;

export default async function StoreMetadata(
  fileName,
  caption,
  fileType,
  imageUrl
) {
  // creating a client
  // connecting to MongoDB
  try {
    const client = new MongoClient(mongodbUri);
    client.connect;

    // mongodb will create this db and collection if they don't already exist
    const collection = client.db("tutorial").collection("metadata");

    await collection.insertOne({
      fileName,
      caption,
      fileType,
      imageUrl,
    });
  } catch (error) {
    console.log("error in storing metadata: ", error);
  }
}
