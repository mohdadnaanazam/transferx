import { CardWithForm } from '@/components/CardWithForm'
import { SalesProvider } from '@/context/upload-context'

export default function Page() {
  return (
    <main className='flex justify-between flex-row'>
      <div className='w-1/2 flex justify-center items-center'>
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </div>
      <div className='w-1/2 flex justify-center items-center flex-row space-x-5 h-[75vh] relative'>
        <div className='bg-green-0 w-[6px] h-28 mt-6'></div>
        <h1 className='text-[120px] font-medium'>transferr</h1>
        <p className='absolute bottom-44 right-44 text-lg font-normal'>where files fly faster</p>
      </div>
    </main>
  )
}
