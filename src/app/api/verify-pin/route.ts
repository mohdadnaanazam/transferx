import shareableLinkSchema from '../../../models/shareableSchema'

export async function POST(request: Request) {

  try {
    const data = await request.json()

    const shareableLink = await shareableLinkSchema.findById(data.linkId)

    let isCorrectPin = false
    // console.log(shareableLink.pin data.pin)

    if (shareableLink.pin.toString() === data.pin.toString()) {
      isCorrectPin = true
    }

    return Response.json({ is_pin_matched: isCorrectPin })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}