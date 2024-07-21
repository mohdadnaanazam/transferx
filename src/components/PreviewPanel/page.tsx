import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

type PreviewPanelProps = {
  url: string,
  type: string,
  downloadableURL: string,
  fileName: string,
  handleDownload: (s3Url: string, filename: string, file_type: string) => void
  s3Key: string
}

const CLOUD_FRONT_URL = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL

const RenderPreview = ({ url, type }: { url: string, type: string }) => {
  if (type.includes('video')) {
    return <video src={url} className="object-contain" height={600} controls autoPlay />;
  } else if (type.includes('image')) {
    return <Image src={url} alt="preview" fill style={{ objectFit: 'contain' }} />;
  } else {
    return <Image src={'/folder.png'} alt="preview" height={300} width={300} style={{ objectFit: 'contain' }} />;
  }
}

export const PreviewPanel = (props: PreviewPanelProps) => {
  const { url, type, downloadableURL, fileName, handleDownload, s3Key } = props

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Preview</Button>
      </SheetTrigger>

      <SheetContent className="w-full h-full flex flex-col md:w-[70vw] overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Preview</SheetTitle>
          <SheetDescription>
            Preview uploaded file
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1">
          <div className="flex relative h-[100%] mt-auto justify-center items-center">
            <RenderPreview url={`${CLOUD_FRONT_URL}/${s3Key}`} type={type} />
          </div>
        </div>
        <SheetFooter className="mt-32 bottom-0">
          <Button onClick={() => handleDownload(downloadableURL, fileName, type)}>Download</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
