import axios from "axios"
import { useContext, useState } from "react"
import mime from 'mime'

import { IS_UPLOADING, SET_FILE, UploadContext } from "@/context/upload-context"

export const useUploadFile = () => {
  // init
  const [{ file, filename, pin, expiryDate }, dispatch] = useContext(UploadContext)

  // state
  const [shareLink, setShareLink] = useState('')
  const [progress, setProgress] = useState<null | number>(0)

  const handleSubmit = async () => {
    if (!file) {
      return alert('Please select a file to upload.')
    }

    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type, expiryDate: expiryDate.toDateString() }),
      }

      dispatch({ type: IS_UPLOADING, payload: true })

      const uploadResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/upload', options)

      const signedUploadResponse = await uploadResponse.json()

      const signedURL = signedUploadResponse.url
      const objectKey = signedUploadResponse.key // uuid

      const formData = new FormData();
      formData.append('file', file as unknown as Blob)

      // upload file to s3 using signed url
      await axios.put(signedURL, file, {
        headers: {
          'Content-Type': file.type,
          'Expires': new Date(expiryDate).toDateString()
        },
        onUploadProgress: (progressEvent: any) => {
          if (progressEvent.bytes) {
            setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          }
        }
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

      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/short-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ s3_url: s3_url.url, pin, file_type: file.type, file_name: filename, downloadable_url: s3_url.downloadableURL, expiry: expiryDate, s3_key: objectKey })
      })

      if (response.ok) {
        const { url } = await response.json()
        setShareLink(url)
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({ type: IS_UPLOADING, payload: false })
    }
  }

  const handleSetFile = (file: any) => {
    if (file && file?.size <= 50 * 1024 * 1024 * 1024) {
      dispatch({ type: SET_FILE, payload: file })
    } else {
      alert('File size should be less than 50GB')
    }
  }

  return {
    handleSubmit,
    shareLink,
    setShareLink,
    progress,
    handleSetFile
  }
}