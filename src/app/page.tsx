import { CardWithForm } from '@/components/CardWithForm'
import { GlobeDemo } from '@/components/HomeGlobe'
import { SalesProvider } from '@/context/upload-context'

export default function Page() {
  return (
    <main className='flex max-w-7xl md:mx-auto h-[91vh] px-5 flex-row'>
      <div className='flex-1 h-full flex justify-center items-center'>
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </div>

      <div className='flex-1 hidden md:flex justify-center items-center relative'>
        <GlobeDemo />
      </div>
    </main>
  )
}
