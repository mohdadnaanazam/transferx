import { CardWithForm } from '@/components/CardWithForm'

export default function Page() {
  return (
    <main className='flex justify-between flex-row'>
      <div className='w-1/2 flex justify-center items-center'>
        <CardWithForm />
      </div>
      <div className='w-1/2 flex justify-center items-center flex-row space-x-5 h-[75vh] relative'>
        <div className='bg-green-700 w-2 h-28 mt-6'></div>
        <h1 className='text-[120px] font-medium'>transferr</h1>
        <p className='absolute bottom-44 right-44 text-lg font-normal'>where files fly faster</p>
      </div>
    </main>
  )
}
