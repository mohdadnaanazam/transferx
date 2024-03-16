import { Button } from "@/components/ui/button"

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

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
            {type.includes('image') && <Image src={url} alt="preview" fill style={{ 'objectFit': 'contain' }} />}

            {type.includes('video') && <video src={url} width={700} height={600} />}
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
