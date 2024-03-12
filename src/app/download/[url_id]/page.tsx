import mongoose from 'mongoose';

import connectToDatabase from "../../../../config/mongodb";
import ShareableLink from "@/models/shareableSchema";
import { AskPin } from "@/components/AskPin";
import { DownloadCard } from '@/components/DownloadCard/DownloadCard';

async function getS3_link(id: string) {
  await connectToDatabase();

  try {
    const shareableLink = await ShareableLink.findOne({ _id: new mongoose.Types.ObjectId(id) }).exec()

    if (shareableLink) {
      return shareableLink
    }

    return {
      destination: '/404'
    }
  } catch (error) {

    return {
      destination: '/404'
    };
  }
}

export default async function Download({ params }: { params: { url_id: string } }) {
  const url = await getS3_link(params.url_id)

  return (
    <main className="flex mt-36 p-12 overflow-y-hidden">
      {url && <AskPin visible={url.is_pin_protected} linkId={params.url_id} />}
      <div className="flex justify-between w-full">
        <DownloadCard s3URL={url.s3_url} downloadableURL={url.downloadable_url} fileType={url.file_type} fileName={url.file_name} />

        <div className='w-1/2 flex justify-center items-center flex-row space-x-5 relative'>
          <div className='bg-green-0 w-2 h-28 mt-6'></div>
          <h1 className='text-[120px] font-medium'>transferr</h1>
          <p className='absolute bottom-0 right-36 text-lg font-normal'>where files fly faster</p>
        </div>
      </div>
    </main>
  )
}
