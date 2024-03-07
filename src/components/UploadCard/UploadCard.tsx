"use client"
import React, { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'
import { BackgroundGradient } from "../../../ui/background-gradient"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

export const UploadCard = () => {
  const onDrop = useCallback((acceptedFiles : any) => {
    // Do something with the files
    console.log(acceptedFiles, 'this is acceptedFiles')
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <BackgroundGradient className="rounded-[22px] p-1 sm:p-5 border bg-zinc-900">
      <div {...getRootProps()} className="h-56 border rounded-[22px] flex justify-center items-center">
        <input {...getInputProps()} />
        { isDragActive ? <p className='text-white text-xl'> Drop here </p>: <CloudUploadOutlinedIcon sx={{ fontSize: '150px', color: 'white' }} /> }
      </div>

      <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
        Upload files
      </p>

      <p className="text-sm text-neutral-400">
        Drag & drop your files here to get the trasferable link
      </p>
    </BackgroundGradient>
  )
}
