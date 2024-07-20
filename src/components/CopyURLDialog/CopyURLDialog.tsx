import { useEffect, useRef } from "react"
import Link from "next/link"
import { CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "../ui/use-toast"
import { Label } from "@/components/ui/label"

interface CopyURLDialogProps {
  progress: null | number
  shareLink: '' | string
}

export function CopyURLDialog({ progress, shareLink }: CopyURLDialogProps) {
  const { toast } = useToast()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', handleClick)
      }
    }

    if (progress === 100) {
      buttonRef.current?.addEventListener('click', handleClick)
      buttonRef.current?.click()
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', handleClick)
      }
    }
  }, [shareLink])

  // TODO: make it a custom hook
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shareLink)
        .then(() => {
          toast({ title: "Link Copied", description: "The link has been copied to the clipboard." })
        })
        .catch((err) => {
          toast({ title: "Error", description: "Unable to copy link to clipboard." })
        })
    } catch (err) {
      toast({ title: "Error", description: "Clipboard API not supported." })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={buttonRef} variant="outline" className="hidden">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue=""
              value={shareLink}
              readOnly
            />
          </div>
          <Button onClick={handleCopy} size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start ">
          <div className="flex flex-row justify-between items-center w-full">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>

            <Link href='/links' className="text-sm underline underline-offset-2">Show recent links</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
