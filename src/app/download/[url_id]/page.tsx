import Link from "next/link";
import mongoose from 'mongoose';

import connectToDatabase from "../../../../config/mongodb";
import ShareableLink from "@/models/shareableSchema";

async function getS3_link(id: string) {
  await connectToDatabase();

  try {
    const shareableLink = await ShareableLink.findOne({ _id: new mongoose.Types.ObjectId(id) }).exec();

    if (shareableLink) {
      return {
        destination: `${shareableLink.s3_url}`,
      };
    }

    return {
      destination: '/404',
    };
  } catch (error) {
    console.error("Error getting S3 link:", error);
    return {
      destination: '/404',
    };
  }
}

export default async function Download({ params }: { params: { url_id: string } }) {
  const url = await getS3_link(params.url_id);

  return <Link href={url.destination}>Download</Link>;
}
