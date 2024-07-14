import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer(): JSX.Element {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false)

  return (
    <footer className='flex flex-col md:flex-row justify-evenly items-center py-2 border-t w-full md:px-36 mx-auto'>
      <div className='flex-1 flex justify-center md:justify-start md:items-center p-3'>
        <Link className="font-medium text-3xl" href='/'>
          transfer<span style={{ color: 'rgb(0, 253, 75)', fontSize: '1.1em' }}>X</span>
        </Link>
      </div>

      <div className='flex-1 flex flex-col items-center md:items-end space-y-2 p-3'>
        <button
          onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          className='flex items-center font-semibold md:hidden'>
          Company
          {isCompanyOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>

        <div className={`${isCompanyOpen ? 'block' : 'hidden'} md:block`}>
          <h2 className='font-semibold hidden md:block'>Company</h2>
          <Link href='/about'>
            <p className='text-[#737373] font-medium'>Privacy Policy</p>
          </Link>
          <Link href='/about'>
            <p className='text-[#737373] font-medium'>About Us</p>
          </Link>
        </div>
      </div>

      <div className='flex-1 flex flex-col items-center md:items-end space-y-2 p-3'>
        <button
          onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
          className='flex items-center font-semibold md:hidden'>
          Quick Links
          {isQuickLinksOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>

        <div className={`${isQuickLinksOpen ? 'block' : 'hidden'} md:block`}>
          <h2 className='font-semibold hidden md:block'>Quick Links</h2>
          <Link href='#'>
            <p className='text-[#737373] font-medium'>Blog</p>
          </Link>
          <Link href='#'>
            <p className='text-[#737373] font-medium'>Learn</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}