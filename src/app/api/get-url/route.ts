import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'

export async function GET(request: Request) {

  const url = request.url
  
  const objectKey = url?.split("=")?.[1]

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
      Key: objectKey,
    })

    const url = await getSignedUrl(client, getObjectCommand)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/short-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ s3_url: url }),
      });

      if (response.ok) {
        const { url } = await response.json()
        return Response.json({ url })
      } else {
        console.error('Error:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }

    return Response.json({ url })
  } catch (error: any) {
    return Response.json({ error: error.message })
  }
}
