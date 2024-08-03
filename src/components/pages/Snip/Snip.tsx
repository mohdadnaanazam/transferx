'use client'

import { ChangeEvent, useState } from 'react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MaxWidthContainer } from '@/components/MaxWidthContainer'
import { SparklesCore } from "../../ui/sparkles"
import { CopyURLDialog } from '@/components/CopyURLDialog'

type Props = {}

export const Snip = ({ }: Props) => {
  const [data, setData] = useState({ url: '', alias: '' })
  const [snipURL, setSnipURL] = useState('')
  const [isValidUrl, SetIsValidUrl] = useState(true)
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function isValidURL(string: string): boolean {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: data.url, alias: data.alias })
    }

    if (data.url && isValidURL(data.url)) {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/snip-url', options)
      const { url } = await response.json()
      setSnipURL(url)
      SetIsValidUrl(true)
    } else {
      SetIsValidUrl(false)
      setSnipURL('');
    }
  }

  return (
    <MaxWidthContainer>
      <div className='flex justify-between items-center'>
        <Card className='w-full md:max-w-[450px]'>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col items-start gap-y-6'>
            <div className="flex flex-col w-full">
              <Label htmlFor="url">Url</Label>
              <Input name="url" value={data.url} onChange={handleFormChange} className='border-0 border-b rounded-none pl-0 focus:outline-none w-full' />
            </div>
            {!isValidUrl && <p id='errorType' className='text-sm text-red-600'>Enter the url</p>}
            <div className="flex flex-col w-full">
              <Label htmlFor="alias">Alias</Label>
              <Input type="text" name="alias" value={data.alias} onChange={handleFormChange} className="border-0 border-b rounded-none pl-0 focus:outline-none w-full" />
            </div>
          </CardContent>
          <CardFooter>
            {isValidUrl && <CopyURLDialog progress={100} shareLink={`${process.env.NEXT_PUBLIC_BASE_URL}/${snipURL}`} description={'Anyone who has this link will be able to access the URL.'} historyURL={'/snip/links'} />}
            <Button disabled={!data.url} onClick={handleSubmit} className="ml-auto py-1 text-base">Snip</Button>
          </CardFooter>
        </Card>
        <div>
          <div className="h-[35rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-2xl lg:text-9xl font-bold text-center text-white relative z-20">Snip URL</h1>
            <div className="md:w-[20rem] lg:w-[40rem] h-40 relative mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-[50%] lg:w-full h-full mx-auto"
                particleColor="#FFFFFF"
              />

              <div className="absolute inset-0 w-full h-full bg-[#020817] [mask-image:radial-gradient(200px_200px_at_top,transparent_20%,white)] lg:[mask-image:radial-gradient(300px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  )
}
