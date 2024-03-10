'use client'

import { CardWithForm } from '@/components/CardWithForm'
import axios from 'axios'
import { useState } from 'react'

export default function Page() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [shareLink, setShareLink] = useState('')
  const [progress, setProgress] = useState<null | number>(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    setUploading(true)

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
        console.log('File uploaded successfully:', response);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });

    const getSignedURL = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/get-url?key=${objectKey}`, {
      method: 'GET'
    })

    const shareableURL = await getSignedURL.json()
    setShareLink(shareableURL.url)

  }

  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/${shareLink}`)

  return (
    <main className='flex justify-between flex-row'>
      <div className='w-1/2 flex justify-center items-center'>
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
        <CardWithForm />
      </div>
      <div className='w-1/2 flex justify-center items-center flex-row space-x-4 h-[75vh] relative'>
        <div className='bg-green-700 w-2 h-20 mt-4'></div>
        <h1 className='text-8xl font-medium'>transferr</h1>
        <p className='absolute bottom-52 right-52 text-sm font-semibold'>where files fly faster</p>
      </div>
    </main>
  )
}
