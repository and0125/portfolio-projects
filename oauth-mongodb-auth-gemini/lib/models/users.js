// lib/models/user.js
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

const usersCollectionName = "users";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(); // Replace with your actual database name if needed
  return db.collection(usersCollectionName);
}

export async function createUser(email, password) {
  const collection = await getCollection();
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt factor of 10
  const now = new Date();
  const result = await collection.insertOne({
    email: email.toLowerCase(), // Store email in lowercase for consistency
    password: hashedPassword,
    createdAt: now,
    updatedAt: now,
  });
  return result.insertedId;
}

/**
 *
 * These are helper functions for interacting with the MongoDB User Model
 *
 */
export async function findUserByEmail(email) {
  const collection = await getCollection();
  return await collection.findOne({ email: email.toLowerCase() });
}

export async function findUserById(id) {
  const collection = await getCollection();
  try {
    const objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
  } catch (error) {
    // If the provided 'id' string is not a valid ObjectId format,
    // the ObjectId constructor will throw an error. We catch this error
    // and return null, indicating that no user with that (invalid) ID was found.
    return null;
  }
}
/**
 *
 * This helper function compares passwords to the hashed password
 *
 */
export async function comparePassword(plainTextPassword, hashedPassword) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}
