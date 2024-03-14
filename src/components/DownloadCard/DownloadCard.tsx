'use client'

import { PreviewPanel } from "@/components/PreviewPanel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type DownloadCardProps = {
  s3URL: string
  fileType: string
  fileName: string
  downloadableURL: string
}

const handleDownload = async (s3Url: string, filename: string, file_type: string) => {
  try {
    const extension = file_type.split('/')[1] || 'unknown'

    const link = document.createElement('a')
    link.href = s3Url
    link.setAttribute('download', '') // Set download attribute to empty string
    link.setAttribute('target', '_blank') // Open link in a new tab/window

    // Set a dummy attribute to force download in Firefox
    link.setAttribute('rel', 'noopener noreferrer')

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

  } catch (error: any) {
    console.error('Error downloading file:', error.message);
  }
};


export const DownloadCard: React.FC<DownloadCardProps> = ({ s3URL, fileType, fileName, downloadableURL }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center cursor-pointer">
          <CircleArrowDown size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-0" />
          Download
        </CardTitle>
        <CardDescription>Preview or download your file</CardDescription>
      </CardHeader>

      <CardContent className="space-x-6">
        <PreviewPanel url={s3URL} type={fileType} />
        
        <Button onClick={() => handleDownload(downloadableURL, fileName, fileType)}>Download</Button>
      </CardContent>
    </Card>
  )
}
