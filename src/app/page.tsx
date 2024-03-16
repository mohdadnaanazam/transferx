import { CardWithForm } from '@/components/CardWithForm'
import { GlobeDemo } from '@/components/HomeGlobe'
import { SalesProvider } from '@/context/upload-context'

export default function Page() {
  return (
    <main className='flex max-w-7xl md:mx-auto px-5 h-[91vh] flex-row'>
      <div className='flex-1 h-full flex justify-start items-center'>
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </div>

      <div className='flex-1 hidden md:flex items-center relative'>
        <GlobeDemo />
      </div>
    </main>
  )
}
