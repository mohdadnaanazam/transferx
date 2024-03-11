import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

export const PreviewPanel = ({ url, type }: { url: string, type: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Preview</Button>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader>
          <SheetTitle>Preview</SheetTitle>
          <SheetDescription>
            Preview uploaded file
          </SheetDescription>
        </SheetHeader>
        <div className="flex justify-center items-center my-16">
          {
            type.includes('image') ? (
              <Image src={url} alt="preview" width={400} height={500} />
            ) : type.includes('video') ? (
              <video src={url} width={700} height={600} controls />
            ) : null
          }
        </div>
        <SheetFooter className="mt-32 mr-32">
          <SheetClose asChild>
            <Button type="submit">Download</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
