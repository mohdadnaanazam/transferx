import mongoose from 'mongoose'
import { redirect } from 'next/navigation'

import { AskPin } from "@/components/AskPin"
import { DownloadCard } from '@/components/DownloadCard/DownloadCard'
import connectToDatabase from "../../../../../config/mongodb"
import ShareableLink from "@/models/shareable-schema"
import { MainHero } from '@/components/MainHero/MainHero'

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

    <main className='flex max-w-7xl md:mx-auto px-5 h-[91vh] flex-row'>
      {url && <AskPin visible={url.is_pin_protected} linkId={params.url_id} />}

      <div className='flex-1 h-full flex justify-start items-center'>
        <DownloadCard s3URL={url.s3_url} downloadableURL={url.downloadable_url} fileType={url.file_type} fileName={url.file_name} />
      </div>

      <div className='flex-1 hidden md:flex items-center relative'>
        <MainHero />
      </div>
    </main>

  )
}
