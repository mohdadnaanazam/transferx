import type { Metadata } from "next"
import { Links as OfflineLinks } from '@/components/Links'

export const metadata: Metadata = {
  title: 'TransferX | Links',
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.'
}

export default async function Links() {
  return (
    <main className="h-full max-w-7xl md:mx-auto">
      <OfflineLinks />
    </main>
  )
}
