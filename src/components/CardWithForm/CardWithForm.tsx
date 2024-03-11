'use client'

import axios from "axios"
import { CirclePlus, Lock } from "lucide-react"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CopyURLDialog } from "../CopyURLDialog"
import { DatePicker } from "../DatePicker"
import { Progress } from "../ui/progress"
import { SetPin } from "../AskPin/SetPin"

export const runtime = 'nodejs'

export const CardWithForm = () => {
  // init
  const inputRef = useRef<HTMLInputElement>(null)

  // states
  const [file, setFile] = useState<File | null>(null)
  const [uplaodedFileName, setUplaodedFileName] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [progress, setProgress] = useState<null | number>(0)
  const [pin, setPin] = useState<null | string>(null)

  const handleSubmit = async () => {

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/upload',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      }
    )

    const signedUploadResponse = await response.json()

    const signedURL = signedUploadResponse.url
    const objectKey = signedUploadResponse.key


    const formData = new FormData();
    formData.append('file', file);

    await axios.put(signedURL, file, {
      headers: {
        'Content-Type': file.type
      },
      onUploadProgress: (progressEvent: any) => {
        if (progressEvent.bytes) {
          setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
        }
      },
    })
      .then(response => {
        setUplaodedFileName(response?.config?.data?.name || 'unknown')
        console.log('File uploaded successfully:', response.config.data.name)
      })
      .catch(error => {
        console.error('Error uploading file:', error)
      })

    const getSignedURL = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/get-url?key=${objectKey}`, {
      method: 'GET',
    })

    const s3_url = await getSignedURL.json()

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/short-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ s3_url: s3_url.url, pin: pin }),
      });

      if (response.ok) {
        const { url } = await response.json()
        setShareLink(url)
      } else {
        console.error('Error:', response.status)
      }

    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle onClick={() => inputRef?.current?.click()} className="flex items-center cursor-pointer">
          <CirclePlus size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-700" />
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
              setFile(files[0])
            }
          }}
          className="hidden"
          accept="image/png, image/jpeg, application/pdf, video/mp4, video/mpeg, video/quicktime"
        />

        {file && <div className="flex items-center gap-4">
          <Progress value={progress} />
          <p className="font-bold">{progress}%</p>
        </div>}

      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Filename</Label>
              <Input id="name" placeholder="filename" value={uplaodedFileName} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="framework">Expiry</Label>
              <DatePicker />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CopyURLDialog progress={progress} shareLink={`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`} />
        <SetPin setPin={setPin} />
        <Button onClick={handleSubmit}>Generate Link</Button>
      </CardFooter>
    </Card>
  )
}
