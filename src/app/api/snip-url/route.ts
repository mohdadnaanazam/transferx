import connectToDatabase from "../../../../config/mongodb"
import SnipLink from '@/models/snip-schema'
import { generateUniqueKey as generateUniqueSlug } from "@/utils/generate-unique-key"

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    await connectToDatabase()

    const existingUrl = await SnipLink.findOne({ url }).exec()
    if (existingUrl) {
      return Response.json({ url: existingUrl.shorten_slug })
    }

    const shorten_slug = generateUniqueSlug({ type: 'snip' })
    const newEntry = new SnipLink({ url, shorten_slug })

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
