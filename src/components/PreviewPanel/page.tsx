import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "../ui/use-toast"
import { Download } from 'lucide-react'

type PreviewPanelProps = {
  url: string,
  type: string,
  downloadableURL: string,
  fileName: string,
  handleDownload: (s3Url: string, filename: string, file_type: string) => void
}

const RenderPreview = ({ url, type }: { url: string, type: string }) => {
  if (type.includes('video')) {
    return <video src={url} className="object-contain" height={600} controls autoPlay />;
  } else if (type.includes('image')) {
    return <Image src={url} alt="preview" fill style={{ objectFit: 'contain' }} />;
  } else {
    return <Image src={'/folder.png'} alt="preview" height={300} width={300} style={{ objectFit: 'contain' }} />;
  }
}

export const PreviewPanel = ({ url, type, downloadableURL, fileName, handleDownload }: PreviewPanelProps) => {
  const { toast } = useToast()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Preview</Button>
      </SheetTrigger>

      <SheetContent className="w-full h-full flex flex-col md:w-[70vw] overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Preview</SheetTitle>
          <SheetDescription className="flex flex-col items-start md:flex-row md:justify-around md:items-center pb-[10px] pb-10">
            <div className="font-semibold text-base">{fileName}</div>
            <div>4.05MB</div>
            <div>Expiry: 26 jul 2024 </div>
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1">
          <div className="flex relative h-[100%] justify-end items-end">
            <RenderPreview url={url} type={type} />
          </div>
        </div>

        <SheetFooter className="flex items-center mr-10 mt-6">
          <div className="flex border-[1px] shadow-md justify-between items-center rounded-md mr-4">
            <div className="px-2">{url.slice(0, 25)}</div>
            <Button onClick={() => toast({ title: "Link Copied" })}>Copy</Button>
          </div>
          <Download onClick={() => handleDownload(downloadableURL, fileName, type)}>Download</Download>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
