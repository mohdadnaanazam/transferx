import { redirect } from "next/navigation";

import connectToDatabase from "../../../../config/mongodb"
import ShareableLink from "@/models/shareableSchema"

async function redirectUser(shorten_slug: string) {
  await connectToDatabase()

  try {
    const shareableLink = await ShareableLink.findOne({ shorten_slug }).exec();

    if (shareableLink) {
      return {
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/download/${shareableLink._id}`,
      }
    }

    return {
      destination: '/404',
    }
  } catch (error) {
    console.error("Error retrieving link:", error);
    return {
      destination: '/404',
    };
  }
}

export default async function Page({ params }: { params: { shorten_slug: string } }) {
  const url = await redirectUser(params.shorten_slug);
  
  redirect(url.destination);
}
