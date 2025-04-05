// lib/clientDb.js
import { MongoClient } from "mongodb";

// Connection URI should be stored in .env.local file
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "nextjs_app";

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// For connection management
let client = null;
let dbInstance = null;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

/**
 * Connect to MongoDB and return the database instance
 */
export async function connectToDatabase() {
  // If we already have a connection, use it
  if (client && dbInstance) {
    return { client, db: dbInstance };
  }

  // Create a new connection
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
  }

  // Get the database instance
  dbInstance = client.db(dbName);

  return { client, db: dbInstance };
}

// Helper functions - you can use these elsewhere in your app
export const getCollection = async (collectionName) => {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
};

export const findOne = async (collectionName, query, options = {}) => {
  const collection = await getCollection(collectionName);
  return collection.findOne(query, options);
};

export const insertOne = async (collectionName, document) => {
  const collection = await getCollection(collectionName);
  return collection.insertOne(document);
};

// Add other helper methods as needed
