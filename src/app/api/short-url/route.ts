import { Db } from 'mongodb'

import { generateUniqueKey as generateUniqueSlug } from "@/app/utils/generateUniqueKey";
import connectToDatabase from "../../../../config/mongodb";

export async function POST(request: Request) {
  try {
    const { s3_url } = await request.json()

    const db: Db = await connectToDatabase()

    const existingUrl = await db.collection('urls').findOne({ s3_url })

    if (existingUrl) {
      return Response.json({ shorten_slug: existingUrl.shorten_slug })
    }

    const shorten_slug = generateUniqueSlug()

    await db.collection('urls').insertOne({ s3_url, shorten_slug })

    return Response.json({ url: shorten_slug })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}
