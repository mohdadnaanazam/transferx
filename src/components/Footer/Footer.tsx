import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className='flex flex-row justify-evenly items-center border-t md:w-10/12 p-2 m-2 mx-auto'>
      <div className='flex-1 flex justify-center md:justify-start md:items-center'>
        <Link className="font-medium text-xl" href='/'>transferX</Link>
      </div>

      <div className='flex-1 flex flex-col items-center md:items-end space-y-1'>
        <h2 className='font-semibold hidden md:block text-sm'>Company</h2>
        <Link href='/about'>
          <p className='text-[#737373] text-sm'>About Us</p>
        </Link>
      </div>

      <div className='flex-1 flex flex-col items-center md:items-end space-y-1'>
        <h2 className='font-semibold hidden md:block text-sm'>Quick Links</h2>
        <Link href='https://www.finoyou.in/'>
          <p className='text-[#737373] text-sm'>Finoyou</p>
        </Link>
      </div>
    </footer>
  )
}
