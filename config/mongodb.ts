import { Db, MongoClient } from "mongodb"

let cachedDB: Db | null = null

export default async function connectToDatabase(): Promise<Db> {
  if (cachedDB) {
    console.info("Using cached client!")
    return cachedDB
  }

  console.info("No client found! Creating a new one.")

  const uri = process.env.MONGOURI as string
  const dbName = process.env.DB_NAME as string

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db: Db = client.db(dbName)
    cachedDB = db
    return cachedDB
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }
}
