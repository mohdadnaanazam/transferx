import connectToDatabase from "../../../../config/mongodb"
import ShareableLink from '@/models/shareableSchema'
import { generateUniqueKey as generateUniqueSlug } from "@/utils/generate-unique-key"

export async function POST(request: Request) {
  try {
    const { s3_url, pin, file_type, file_name, downloadable_url, expiry } = await request.json();

    await connectToDatabase();

    const existingUrl = await ShareableLink.findOne({ s3_url }).exec()

    if (existingUrl) {
      return Response.json({ shorten_slug: existingUrl.shorten_slug })
    }
    const shorten_slug = generateUniqueSlug();

    const newEntry = new ShareableLink({ s3_url, shorten_slug, pin, file_type, file_name, downloadable_url, expiry })

    try {
      await newEntry.save()

      return Response.json({ url: shorten_slug })
    } catch (saveError) {
      return Response.json({ error: 'Error saving entry' })
    }

  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}
