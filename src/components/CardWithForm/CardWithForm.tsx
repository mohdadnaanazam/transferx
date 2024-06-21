'use client'

import { CirclePlus, Info, RotateCcw } from "lucide-react"
import { MouseEvent, useContext, useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CopyURLDialog } from "../CopyURLDialog"
import { DatePicker } from "../DatePicker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "../ui/progress"
import { RESET, SET_EXPIRY_DATE, SET_FILE_NAME, SET_PIN, UploadContext } from "@/context/upload-context"
import { SetPin } from "../AskPin/SetPin"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { useUploadFile } from "@/hooks/use-upload-file"

export const CardWithForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [resetPINSymbol, setResetPINSymbol] = useState(false)
  const [{ file, isUploading, filename, expiryDate, pin }, dispatch] = useContext(UploadContext)

  const { handleSubmit, progress, setShareLink, shareLink, handleSetFile } = useUploadFile()

  const defaultExpiryDate = new Date()
  defaultExpiryDate.setDate(defaultExpiryDate.getDate() + 7)
  
  useEffect(() => {
    if (shareLink !== '') {
      dispatch({ type: RESET })
    }
  }, [shareLink])

  const handleChangeFilename = (value: string) => {
    dispatch({ type: SET_FILE_NAME, payload: value })
  }

  const handleDateChange = (value?: Date) => {
    const currentDate = new Date()
    if (value && value < currentDate) {
      alert("You can't select past dates.")
      return
    }
    dispatch({ type: SET_EXPIRY_DATE, payload: value })
  }

  const handleResetForm = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({ type: RESET })
    setShareLink('')
    setResetPINSymbol(true)
  }

  useEffect(() => {
    if (resetPINSymbol) {
      setResetPINSymbol(false)
    }
  }, [resetPINSymbol])

  return (
    <TooltipProvider>
      <Card className="w-full md:max-w-[450px]">
        <CardHeader>
          <CardTitle onClick={() => inputRef?.current?.click()} className="flex items-center cursor-pointer">
            <CirclePlus size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-0" />
            <p> Upload files <span className="text-xs text-end opa50 font-light text-white">(up to 15GB)</span></p>

            {(file || filename || pin) && (
              <Tooltip>
                <TooltipTrigger className="ml-auto">
                  <RotateCcw onClick={(e) => handleResetForm(e)} size={18} strokeWidth={1.25} className={cn("text-white ml-auto")} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            )}

          </CardTitle>
          <input
            id="file"
            type="file"
            ref={inputRef}
            onChange={(e) => {
              const files = e.target.files
              const file = files?.[0]

              handleSetFile(file)
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
                <Label htmlFor="framework" className="flex gap-2 items-center">
                  Expiry
                  <Tooltip>
                    <TooltipTrigger onClick={(e: MouseEvent) => e.preventDefault()}>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>The link will not be accessible after the expiry date.</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>

                <DatePicker value={expiryDate || defaultExpiryDate} onChange={handleDateChange} />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <CopyURLDialog progress={progress} shareLink={`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`} />
          <SetPin setPin={(pin) => dispatch({ type: SET_PIN, payload: pin })} shareLink={shareLink} resetPIN={resetPINSymbol} />
          <Button disabled={isUploading} onClick={handleSubmit}>Generate Link</Button>
        </CardFooter>
      </Card>
    </TooltipProvider>
  )
}
