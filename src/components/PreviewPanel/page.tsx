import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Header } from "../Header"

export const PreviewPanel = ({ url, type }: { url: string, type: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Preview</Button>
      </SheetTrigger>
      <SheetContent >
        <Header />
        <div className="flex justify-center items-center my-16">
          {
            type.includes('image') ? (
              <Image src={url} alt="preview" width={400} height={500} />
            ) : type.includes('video') ? (
              <video src={url} width={700} height={600} controls />
            ) : null
          }
        </div>
        <SheetFooter className="mt-32 bottom-0">
          <div className="flex flex-row justify-between w-full mt-5 p-3">
            <div className="flex flex-col">
              <p className="font-bold">download.jpg</p>
              <p className="font-thin">23.2 kb</p>
            </div>
            <Button type="submit">Download</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
