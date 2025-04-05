import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/utils/mongodb-client";

/**
 * Initialize and get authentication instance
 * IMPORTANT: This must be called at runtime, not at import time
 */
export async function getAuth() {
  // Get the MongoDB database instance
  const { db } = await connectToDatabase();

  // Create and return auth with the MongoDB Db instance
  return betterAuth({
    database: mongodbAdapter(db), // db is a raw MongoDB Db instance
  });
}
