// lib/mongodb.js
import { MongoClient, ObjectId } from "mongodb";

// Check if we're in production or development mode
const isDev = process.env.NODE_ENV !== "production";

// Connection URI should be stored in .env.local file
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "better_auth_test";

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Cached connection
let cachedClient = null;
let cachedDb = null;

/**
 * Global MongoDB client for Next.js
 * This pattern ensures efficient connection pooling with Next.js API routes
 */
export async function connectToDatabase() {
  // If we already have a connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Create a new connection
  let client;
  let db;

  if (!isDev) {
    // In production, use connection pooling
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(uri, options);
      await global._mongoClient.connect();
    }
    client = global._mongoClient;
  } else {
    // In development, create a new client each time
    client = new MongoClient(uri, options);
    await client.connect();
  }

  db = client.db(dbName);

  // Cache the connection
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

/**
 * MongoDB Client class for Next.js applications
 */
class MongoDBClient {
  constructor() {
    this.client = null;
    this.db = null;
    this.isConnected = false;
  }

  /**
   * Connect to MongoDB
   * @returns {Promise} Resolves to the MongoDB connection
   */
  async connect() {
    try {
      if (!this.isConnected) {
        const { client, db } = await connectToDatabase();
        this.client = client;
        this.db = db;
        this.isConnected = true;

        if (isDev) {
          console.log(`Connected to MongoDB: ${dbName}`);
        }
      }
      return this.db;
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }

  /**
   * Get a collection
   * @param {string} collectionName - Name of the collection
   * @returns {Collection} The MongoDB collection
   */
  async getCollection(collectionName) {
    if (!this.isConnected) {
      await this.connect();
    }
    return this.db.collection(collectionName);
  }

  /**
   * Insert a document into a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} document - Document to insert
   * @returns {Promise} Result of the insert operation
   */
  async insertOne(collectionName, document) {
    const collection = await this.getCollection(collectionName);
    return await collection.insertOne(document);
  }

  /**
   * Insert multiple documents into a collection
   * @param {string} collectionName - Name of the collection
   * @param {Array} documents - Array of documents to insert
   * @returns {Promise} Result of the insert operation
   */
  async insertMany(collectionName, documents) {
    const collection = await this.getCollection(collectionName);
    return await collection.insertMany(documents);
  }

  /**
   * Find documents in a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} query - Query filter
   * @param {Object} options - Query options (projection, sort, limit, skip)
   * @returns {Promise} Array of found documents
   */
  async find(collectionName, query = {}, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.find(query, options).toArray();
  }

  /**
   * Find a single document in a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} query - Query filter
   * @param {Object} options - Query options (projection)
   * @returns {Promise} Found document or null
   */
  async findOne(collectionName, query, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.findOne(query, options);
  }

  /**
   * Find a document by ID
   * @param {string} collectionName - Name of the collection
   * @param {string} id - Document ID
   * @returns {Promise} Found document or null
   */
  async findById(collectionName, id) {
    return this.findOne(collectionName, { _id: new ObjectId(id) });
  }

  /**
   * Update a single document in a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} filter - Filter to find document to update
   * @param {Object} update - Update operations to perform
   * @param {Object} options - Update options
   * @returns {Promise} Result of the update operation
   */
  async updateOne(collectionName, filter, update, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.updateOne(filter, update, options);
  }

  /**
   * Update multiple documents in a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} filter - Filter to find documents to update
   * @param {Object} update - Update operations to perform
   * @param {Object} options - Update options
   * @returns {Promise} Result of the update operation
   */
  async updateMany(collectionName, filter, update, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.updateMany(filter, update, options);
  }

  /**
   * Delete a single document from a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} filter - Filter to find document to delete
   * @param {Object} options - Delete options
   * @returns {Promise} Result of the delete operation
   */
  async deleteOne(collectionName, filter, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.deleteOne(filter, options);
  }

  /**
   * Delete multiple documents from a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} filter - Filter to find documents to delete
   * @param {Object} options - Delete options
   * @returns {Promise} Result of the delete operation
   */
  async deleteMany(collectionName, filter, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.deleteMany(filter, options);
  }

  /**
   * Count documents in a collection
   * @param {string} collectionName - Name of the collection
   * @param {Object} filter - Filter to count documents
   * @param {Object} options - Count options
   * @returns {Promise} Number of matching documents
   */
  async countDocuments(collectionName, filter = {}, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.countDocuments(filter, options);
  }

  /**
   * Perform aggregation on a collection
   * @param {string} collectionName - Name of the collection
   * @param {Array} pipeline - Aggregation pipeline
   * @param {Object} options - Aggregation options
   * @returns {Promise} Aggregation results
   */
  async aggregate(collectionName, pipeline, options = {}) {
    const collection = await this.getCollection(collectionName);
    return await collection.aggregate(pipeline, options).toArray();
  }
}

// Create and export a singleton instance
const mongoDbClient = new MongoDBClient();
export default mongoDbClient;
