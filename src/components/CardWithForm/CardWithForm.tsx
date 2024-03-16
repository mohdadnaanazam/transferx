'use client'

import { CirclePlus, RotateCcw } from "lucide-react"
import { MouseEvent, useContext, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CopyURLDialog } from "../CopyURLDialog"
import { DatePicker } from "../DatePicker"
import { Input } from "@/components/ui/input"
import { RESET, SET_EXPIRY_DATE, SET_FILE, SET_FILE_NAME, SET_PIN, UploadContext } from "@/context/upload-context"
import { Label } from "@/components/ui/label"
import { Progress } from "../ui/progress"
import { SetPin } from "../AskPin/SetPin"
import { useUploadFile } from "@/hooks/use-upload-file"

export const CardWithForm = () => {
  // init
  const inputRef = useRef<HTMLInputElement>(null)
  const [{ file, isUploading, filename, expiryDate, pin }, dispatch] = useContext(UploadContext)

  const { handleSubmit, progress, setShareLink, shareLink } = useUploadFile()


  const handleChangeFilename = (value: string) => {
    dispatch({ type: SET_FILE_NAME, payload: value })
  }

  const handleDateChange = (value?: Date) => {
    dispatch({ type: SET_EXPIRY_DATE, payload: value })
  }

  const handleResetForm = (e: MouseEvent) => {
    e?.stopPropagation()
    dispatch({ type: RESET })
    setShareLink('')
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle onClick={() => inputRef?.current?.click()} className="flex items-center cursor-pointer">
          <CirclePlus size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-0" />
          Upload files
          <RotateCcw onClick={(e) => handleResetForm(e)} size={18} strokeWidth={1.25} className={cn("text-white ml-auto")} />
        </CardTitle>

        <CardDescription>Or select a folder</CardDescription>
        <input
          id="file"
          type="file"
          ref={inputRef}
          onChange={(e) => {
            const files = e.target.files
            if (files) {
              dispatch({ type: SET_FILE, payload: files[0] })
            }
          }}
          className="hidden"
          accept="*"
        />

        <div className={cn("flex items-center gap-4", { 'hidden': !file || !isUploading })}>
          <Progress value={progress} />
          <p className="font-bold">{progress}%</p>
        </div>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Filename</Label>
              <Input onChange={(e) => handleChangeFilename(e.target.value)} id="name" placeholder="filename" className="border-0 border-b rounded-none pl-0 focus:outline-none" value={filename} />
            </div>

            <div className="flex flex-col mt-3 space-y-2 ">
              <Label htmlFor="framework">Expiry</Label>
              <DatePicker value={expiryDate} onChange={handleDateChange} />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <CopyURLDialog progress={progress} shareLink={`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`} />
        <SetPin setPin={(pin) => dispatch({ type: SET_PIN, payload: pin })} />
        <Button disabled={isUploading} onClick={handleSubmit}>Generate Link</Button>
      </CardFooter>
    </Card>
  )
}
