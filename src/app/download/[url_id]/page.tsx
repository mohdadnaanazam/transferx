import Link from "next/link";
import { ObjectId } from "mongodb";

import connectToDatabase from "../../../../config/mongodb";

async function getS3_link(id: string) {
  const database = await connectToDatabase();
  const campaign = await database.collection('urls').findOne({_id : new ObjectId(id)});

  if (campaign) {
    return {
      destination: `${campaign.s3_url}`,
    };
  }

  return {
    destination: '/404',
  };
}

export default async function Page({ params }: { params: { url_id: string } }) {
  const url = await getS3_link(params.url_id);

  return <Link href={url.destination}>Download</Link>;
}
