import { CardWithForm } from '@/components/CardWithForm'
import axios from 'axios'
import { useState } from 'react'

export default function Page() {
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
        <h1 className='text-[140px] font-medium'>transferr</h1>
        <p className='absolute bottom-52 right-52 text-sm font-semibold'>where files fly faster</p>
      </div>
    </main>
  )
}
