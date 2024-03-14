import { limiter } from '@/utils/limiter'
import shareableLinkSchema from '../../../models/shareableSchema'

export async function POST(request: Request) {
  const remaining = await limiter.removeTokens(1)

  if (remaining < 1) {
    return Response.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  console.log('remaining', remaining)

  try {
    const data = await request.json()

    const shareableLink = await shareableLinkSchema.findById(data.linkId).select('pin')

    let isCorrectPin = false

    if (shareableLink.pin.toString() === data.pin.toString()) {
      isCorrectPin = true
    }

    return Response.json({ is_pin_matched: isCorrectPin })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}