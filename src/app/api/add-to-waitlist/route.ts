import connectToDatabase from "../../../../config/mongodb"
import Waitlist from "@/models/waitlist-schema"

export async function POST(request: Request) {
  try {
    const { email, type } = await request.json()

    await connectToDatabase()

    const existingEmail = await Waitlist.findOne({ email, type }).exec()

    if (existingEmail) {
      return Response.json({ error: 'Already added' }, { status: 500 })
    }

    const newEntry = new Waitlist({ email, type })

    await newEntry.save()
    return Response.json({ email, type }, { status: 201 })

  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
