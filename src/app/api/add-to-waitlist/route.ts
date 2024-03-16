import connectToDatabase from "../../../../config/mongodb"
import Waitlist from "@/models/waitlistSchema"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    await connectToDatabase()

    const existingEmail = await Waitlist.findOne({ email }).exec()

    if (existingEmail) {
      return Response.json({ error: 'Already added' }, { status: 500 })
    }

    const newEntry = new Waitlist({ email })

    try {
      await newEntry.save()

      return Response.json({ email }, { status: 201 })
    } catch (saveError) {
      return Response.json({ error: 'Error saving entry' }, { status: 500 })
    }

  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
