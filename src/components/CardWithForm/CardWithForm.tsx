'use client'

import { CirclePlus } from "lucide-react"
import { useContext, useRef, useState } from "react"
import axios from "axios"
import mime from 'mime'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CopyURLDialog } from "../CopyURLDialog"
import { DatePicker } from "../DatePicker"
import { Input } from "@/components/ui/input"
import { IS_UPLOADING, SET_EXPIRY_DATE, SET_FILE, SET_FILE_NAME, UploadContext } from "@/context/upload-context"
import { Label } from "@/components/ui/label"
import { Progress } from "../ui/progress"
import { SetPin } from "../AskPin/SetPin"

export const CardWithForm = () => {
  // init
  const inputRef = useRef<HTMLInputElement>(null)
  const [{ file, isUploading, filename, expiryDate }, dispatch] = useContext(UploadContext)

  // states
  const [shareLink, setShareLink] = useState('')
  const [progress, setProgress] = useState<null | number>(0)
  const [pin, setPin] = useState<null | string>(null)

  const handleSubmit = async () => {

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: file.name, contentType: file.type }),
    }

    dispatch({ type: IS_UPLOADING, payload: true })

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/upload', options)

    const signedUploadResponse = await response.json()

    const signedURL = signedUploadResponse.url
    const objectKey = signedUploadResponse.key

    const formData = new FormData();
    formData.append('file', file as unknown as Blob)

    await axios.put(signedURL, file, {
      headers: { 'Content-Type': file.type },
      onUploadProgress: (progressEvent: any) => {
        if (progressEvent.bytes) {
          setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
        }
      },
    })
      .then(response => {
        // setUplaodedFileName(response?.config?.data?.name || 'unknown')
      })
      .catch(error => {
        console.error('Error uploading file:', error)
      })

    const getSignedURL = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/get-url`, {
      method: 'POST',
      body: JSON.stringify({
        key: objectKey,
        extension: mime.getExtension(file.type),
        filename
      })
    })

    const s3_url = await getSignedURL.json()

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/short-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ s3_url: s3_url.url, pin: pin, file_type: file.type, file_name: filename, downloadable_url: s3_url.downloadableURL })
      })

      if (response.ok) {
        const { url } = await response.json()
        setShareLink(url)
      } else {
        console.error('Error:', response.status)
      }

    } catch (error) {
      console.error('Error:', error)
    } finally {
      dispatch({ type: IS_UPLOADING, payload: false })
    }
  }

  const handleChangeFilename = (value: string) => {
    dispatch({ type: SET_FILE_NAME, payload: value })
  }

  const handleDateChange = (value?: Date) => {
    dispatch({ type: SET_EXPIRY_DATE, payload: value })
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle onClick={() => inputRef?.current?.click()} className="flex items-center cursor-pointer">
          <CirclePlus size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-0" />
          Upload files
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
          accept="image/png, image/jpeg, application/pdf, video/mp4, video/mpeg, video/quicktime"
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
        <SetPin setPin={setPin} />
        <Button disabled={isUploading} onClick={handleSubmit}>Generate Link</Button>
      </CardFooter>
    </Card>
  )
}
