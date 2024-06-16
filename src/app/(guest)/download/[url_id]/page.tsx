import mongoose from 'mongoose'
import { redirect } from 'next/navigation'

import { AskPin } from "@/components/AskPin"
import { DownloadCard } from '@/components/DownloadCard/DownloadCard'
import connectToDatabase from "../../../../../config/mongodb"
import ShareableLink from "@/models/shareable-schema"

async function getS3_link(id: string) {
  await connectToDatabase()

  try {
    const shareableLink = await ShareableLink.findOne({ _id: new mongoose.Types.ObjectId(id) }).exec()

    if (shareableLink) {
      if (shareableLink.expiry < new Date()) {
        return { destination: '/download/link-expired' }
      }
      return shareableLink
    }

    return {
      destination: '/404'
    }
  } catch (error) {

    return {
      destination: '/404'
    }
  }
}

export default async function Download({ params }: { params: { url_id: string } }) {
  const url = await getS3_link(params.url_id)

  if (url && url.destination) {
    redirect(url.destination)
  }

  return (
    <main className="flex max-w-7xl md:mx-auto px-5 h-[91vh] justify-center items-center overflow-y-hidden">
      {url && <AskPin visible={url.is_pin_protected} linkId={params.url_id} />}
      <div className="flex justify-between w-full">
        <DownloadCard s3URL={url.s3_url} downloadableURL={url.downloadable_url} fileType={url.file_type} fileName={url.file_name} />

        <div className='w-1/2 hidden md:flex justify-center flex-col items-end'>
          <div className='flex items-center flex-row space-x-5 relative'>
            <div className='bg-green-0 w-2 h-28 mt-6' />
            <h1 className='text-[120px] font-medium'>transferr</h1>
          </div>

          <p>Where files fly faster</p>
        </div>
      </div>
    </main>
  )
}
