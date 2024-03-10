'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "../DatePicker"
import { CirclePlus, Lock } from "lucide-react"

export const CardWithForm = () => {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CirclePlus size={30} strokeWidth={1.25} className="mr-2 my-2 text-green-700" />
          Upload files
        </CardTitle>
        <CardDescription>Or select a folder</CardDescription>
        {/*
        <form onSubmit={handleSubmit}>
          <input
            id="file"
            type="file"
            onChange={(e) => {
              const files = e.target.files
              if (files) {
                setFile(files[0])
              }
            }}
            accept="image/png, image/jpeg, application/pdf, video/mp4, video/mpeg, video/quicktime"
          />
          <button type="submit" disabled={uploading}>
            Upload
          </button>
        </form>

        {shareLink && <a target='_blank' href={`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`}>{`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`}</a>}
        {progress && <p>{progress}%</p>} */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Filename</Label>
              <Input id="name" placeholder="filename" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="framework">Expiry</Label>
              <DatePicker />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="space-x-2 p-3 flex flex-row justify-between w-32"> Lock with pin <Lock size={16} strokeWidth={1.25} /></Button>
        <Button>Generate Link</Button>
      </CardFooter>
    </Card>
  )
}
