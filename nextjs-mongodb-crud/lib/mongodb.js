import mongoose from "mongoose"


const MongoDBClient = async ({databaseName}) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: databaseName,
        });
        console.log(`Success: Connected to ${databaseName} database in MongoDB`)
    } catch (error) {
        console.log(error);
    }
}

export default MongoDBClient