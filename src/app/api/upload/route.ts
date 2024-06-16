import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { v4 as uuidv4 } from 'uuid'

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export async function POST(request: Request) {
  const { contentType, expiryDate } = await request.json()

  const objectKey = uuidv4()

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 2);

  try {
    const client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
      },
      region: process.env.AWS_REGION ?? ''
    })

    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET ?? '',
      Key: objectKey,
      ContentType: contentType,
      Expires: new Date(expiryDate)
    })

    const url = await getSignedUrl(client, putObjectCommand, { expiresIn: 24 * 60 * 60 })

    return Response.json({ url, key: objectKey })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}