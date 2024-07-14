import ShareableLink from "@/models/shareable-schema"
import { ListObjectsV2Command, HeadObjectCommand, DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3"
import mongoose from "mongoose"

const DB_URI = process.env.DB_URI || ''
let cachedClient: any = null;

const client = new S3Client({
  credentials: {
    accessKeyId: process.env.LAMBDA_AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.LAMBDA_AWS_SECRET_ACCESS_KEY ?? ''
  },
});

const handleUpateFileExpiryInDB = async (id: string) => {
  console.log(`Setting expiry to true for file: ${id}`)
  try {
    const updatedFile = await ShareableLink.findOneAndUpdate({ s3_key: id }, { is_expired: true })

    console.log(updatedFile, 'setting expires to true in DB')
  } catch (error) {
    console.error(`Error updating file expiry for ${id}: ${error}`)
  }
}


module.exports.handler = async () => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET ?? '',
  }

  try {
    // connect to DB
    if (cachedClient === null) {
      cachedClient = await mongoose.connect(DB_URI, { dbName: process.env.DB_NAME })
    }
    const response = await client.send(new ListObjectsV2Command(params))
    const objects = response.Contents

    const currentDate = new Date()

    console.log(`Checking ${objects?.length} objects for expiry`)

    if (!objects) {
      return
    }

    for (const object of objects) {
      const key = object.Key;

      const headParams = {
        Bucket: process.env.AWS_S3_BUCKET ?? '',
        Key: key
      };

      try {
        const headResponse = await client.send(new HeadObjectCommand(headParams))

        if (headResponse && headResponse.Expires) {
          const expiryDate = new Date(headResponse.Expires)

          if (expiryDate < currentDate) {
            // Object has expired, delete it
            await client.send(new DeleteObjectCommand({ Bucket: process.env.AWS_S3_BUCKET, Key: key }))
            console.log(`Deleted object: ${key}`)

            await handleUpateFileExpiryInDB(key as string)

            console.log(`Updated DB for object: ${key}`)
          }
        }
      } catch (error) {
        console.error(`Error getting metadata for object ${key}: ${error}`)
      }

    }
  } catch (err) {
    console.error(err)
  }
};
