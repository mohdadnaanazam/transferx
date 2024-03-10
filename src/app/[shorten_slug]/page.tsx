import { redirect } from "next/navigation";
import connectToDatabase from "../../../config/mongodb";

async function redirectUser(shorten_slug: string) {
  const database = await connectToDatabase();
  const campaign = await database.collection('urls').findOne({ shorten_slug: shorten_slug });

  if (campaign) {
    return {
      destination: `${process.env.NEXT_PUBLIC_BASE_URL}/download/${campaign._id}`,
    };
  }

  return {
    destination: '/404',
  }
}

export default async function Page({ params }: { params: { shorten_slug: string } }) {
  const url = await redirectUser(params.shorten_slug);
  
  redirect(url.destination) 
}
