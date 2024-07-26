import type { Metadata } from "next"
import { Links as OfflineLinks } from '@/components/pages/Links'
import { MaxWidthContainer } from "@/components/MaxWidthContainer"

export const metadata: Metadata = {
  title: 'transferX | Links',
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.'
}

export default async function Links() {
  return (
    <MaxWidthContainer className="h-full">
      <OfflineLinks />
    </MaxWidthContainer>
  )
}
