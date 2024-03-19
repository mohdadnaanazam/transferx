import { Button } from "@/components/ui/button"

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const RenderPreview = ({ url, type }: { url: string, type: string }) => {
  if (type.includes('video')) {
    return <video src={url} className="object-contain" height={600} controls autoPlay />;
  } else if (type.includes('image')) {
    return <Image src={url} alt="preview" fill style={{ objectFit: 'contain' }} />;
  } else {
    return <Image src={'/folder.png'} alt="preview" height={300} width={300} style={{ objectFit: 'contain' }} />;
  }
}

export const PreviewPanel = ({ url, type }: { url: string, type: string }) => {
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
            <RenderPreview url={url} type={type} />

          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Download</Button>
          </SheetClose>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  )
}
