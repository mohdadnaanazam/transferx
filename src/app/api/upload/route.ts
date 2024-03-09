import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { v4 as uuidv4 } from 'uuid'

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export async function POST(request: Request) {
  const { filename, contentType } = await request.json()

  try {
    const client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
      },
      region: process.env.AWS_REGION,
    })

    const putObjectCommand = new PutObjectCommand({
      Bucket: 'transferr.me',
      Key: uuidv4(),
      ContentType: contentType
    })
    
    const url = await getSignedUrl(client, putObjectCommand)

    return Response.json({ url })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}