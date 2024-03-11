'use client'

import { PreviewPanel } from "@/components/PreviewPanel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type DownloadCardProps = {
  url: {
    s3_url: string
    file_type: string
  }
}

const handleDownload = async (s3Url: string, filename: string, file_type: string) => {
  try {
    const res = await fetch(s3Url, {
      method: 'GET',
    })

    const blob = await res.blob()
    const newBlob = new Blob([blob])

    const blobUrl = window.URL.createObjectURL(newBlob)

    const link = document.createElement('a')

    const extension = file_type.split('/')[1] || 'unknown'

    link.href = blobUrl
    link.setAttribute('download', `${filename}.${extension}`)
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)

    window.URL.revokeObjectURL(blobUrl)
  } catch (error: any) {
    console.error('Error downloading file:', error.message)
  }
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ url }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center cursor-pointer">
          <CircleArrowDown size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-700" />
          Download
        </CardTitle>
        <CardDescription>Preview or download your file</CardDescription>
      </CardHeader>
      <CardContent className="space-x-6">
        <PreviewPanel url={url.s3_url} type={url.file_type} />
        {/* TODO: Need to add filename in schema */}
        <Button onClick={() => handleDownload(url.s3_url, 'xyz', url.file_type)}>Download</Button>
      </CardContent>
    </Card>
  )
}
