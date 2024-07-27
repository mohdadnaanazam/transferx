import type { Metadata } from 'next'

import connectToDatabase from "../../../../config/mongodb"
import ShareableLink from "@/models/shareable-schema"
import { AskPin } from "@/components/AskPin"
import { DownloadCard } from '@/components/DownloadCard/DownloadCard'
import { MainHero } from '@/components/MainHero/MainHero'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'transferX',
  openGraph: {
    images: ['https://transferx-prod.s3.ap-south-1.amazonaws.com/transferx_og.png']
  },
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.'
}

async function getS3_link(shorten_slug: string) {
  await connectToDatabase()

  try {
    const url = await ShareableLink.findOne({ shorten_slug }).exec();

    if (url) {
      if (url.is_expired) {
        redirect('/link-expired')
      }
      return url
    }
    redirect('/404')

  } catch (error) {
    redirect('/404')
  }
}

export default async function Page({ params }: { params: { shorten_slug: string } }) {
  const url = await getS3_link(params.shorten_slug)

  return (

    <main className='flex max-w-7xl md:mx-auto px-5 h-[91vh] flex-row'>
      {url && <AskPin visible={url.is_pin_protected} linkId={url._id.toString()} />}

      <div className='flex-1 h-full flex justify-start items-center'>
        <DownloadCard s3URL={url.s3_url} downloadableURL={url.downloadable_url} fileType={url.file_type} fileName={url.file_name} s3Key={url?.s3_key} />
      </div>

      <div className='flex-1 hidden md:flex items-center relative'>
        <MainHero />
      </div>
    </main>

  )
}
