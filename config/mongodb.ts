import mongoose from 'mongoose';

let cachedDB: mongoose.Connection | null = null;

export default async function connectToDatabase(): Promise<mongoose.Connection> {
  if (cachedDB) {
    console.info("Using cached connection!");
    return cachedDB;
  }

  console.info("No connection found! Creating a new one.");

  const uri = process.env.MONGOURI as string;
  const dbName = process.env.DB_NAME as string;

  try {
    const connection = await mongoose.connect(uri, { dbName });
    console.info(`Connected to MongoDB: ${uri}`);
    cachedDB = connection.connection;
    return cachedDB;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
