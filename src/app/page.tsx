'use client'

import { useState } from 'react'

export default function Page() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [shareLink, setShareLink] = useState('')

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

    await fetch(signedURL, {
      method: 'PUT',
      body: file,
      headers: { "Content-Type": file.type }
    })

    const getSignedURL = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/get-url?key=${objectKey}`, {
      method: 'GET'
    })

    const shareableURL = await getSignedURL.json()

    setShareLink(shareableURL.url)
    
  }

  return (
    <main>
      <h1>Upload a File to S3</h1>
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
          accept="image/png, image/jpeg, application/pdf"
        />
        <button type="submit" disabled={uploading}>
          Upload
        </button>
      </form>

      {shareLink && <a  target='_blank' href={shareLink}>here is your link</a>}
    </main>
  )
}