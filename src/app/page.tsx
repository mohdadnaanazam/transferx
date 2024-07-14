import { CardWithForm } from '@/components/CardWithForm'
import { MainHero } from '@/components/MainHero/MainHero'
import { SalesProvider } from '@/context/upload-context'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'transferX',
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.'
}

export default function Page() {

  return (
    <main className='flex max-w-7xl md:mx-auto px-5 h-[91vh] flex-row'>
      <div className='flex-1 h-full flex justify-start items-center'>
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </div>

      <div className='flex-1 hidden md:flex items-center relative'>
        <MainHero />
      </div>
    </main>
  )
}
