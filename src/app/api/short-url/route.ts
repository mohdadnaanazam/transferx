import connectToDatabase from "../../../../config/mongodb"
import ShareableLink from '@/models/shareableSchema'
import { generateUniqueKey as generateUniqueSlug } from "@/app/utils/generateUniqueKey"

export async function POST(request: Request) {
  try {
    const { s3_url } = await request.json();

    await connectToDatabase();

    const existingUrl = await ShareableLink.findOne({ s3_url }).exec();

    if (existingUrl) {
      return Response.json({ shorten_slug: existingUrl.shorten_slug });
    }
    const shorten_slug = generateUniqueSlug();

    const newEntry = new ShareableLink({
      s3_url,
      shorten_slug,
      pin: 123456
    })

    try {
      await newEntry.save()

      return Response.json({ url: shorten_slug });
    } catch (saveError) {
      console.error('Error saving entry:', saveError);
      return Response.json({ error: 'Error saving entry' });
    }

  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}
