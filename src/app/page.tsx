import { CardWithForm } from '@/components/CardWithForm'
import { GlobeDemo } from '@/components/HomeGlobe'
import { SalesProvider } from '@/context/upload-context'

export default function Page() {
  return (
    <main className='flex h-[91vh] flex-row'>
      <div className='flex-1 h-full flex justify-center items-center'>
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </div>

      <div className='flex-1 flex justify-center items-center relative'>
        <GlobeDemo />
      </div>
    </main>
  )
}
