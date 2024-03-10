import Link from "next/link";
import mongoose from 'mongoose';

import connectToDatabase from "../../../../config/mongodb";
import ShareableLink from "@/models/shareableSchema";
import { AskPin } from "@/components/AskPin";

async function getS3_link(id: string) {
  await connectToDatabase();

  try {
    const shareableLink = await ShareableLink.findOne({ _id: new mongoose.Types.ObjectId(id) }).exec();

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
    <main>
      {url && <AskPin visible={url.is_pin_protected} linkId={params.url_id} />}
      <Link href={url.s3_url}>Download</Link>
    </main>
  )
}
