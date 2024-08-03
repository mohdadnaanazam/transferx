import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { generateContentDisposition } from '@/utils/generate-content-disposition';

export async function POST(request: Request) {
  const { key, extension, filename } = await request.json();

  try {
    const client = new S3Client({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
      },
      region: process.env.AWS_REGION,
    })

    const getObjectCommand = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
    })

    const getObjectCommandAttachment = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      ResponseContentDisposition: `attachment; filename=${generateContentDisposition(filename, extension)}`
    })

    const url = await getSignedUrl(client, getObjectCommand, { expiresIn: 7 * 24 * 60 * 60 })

    const downloadableURL = await getSignedUrl(client, getObjectCommandAttachment, { expiresIn: 7 * 24 * 60 * 60 })

    return Response.json({ url, downloadableURL, key })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}
