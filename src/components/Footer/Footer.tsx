import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Footer(): JSX.Element {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsQuickLinksOpen(false);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
    setIsCompanyOpen(false);
  };

  return (
    <footer className="w-full py-2">
      <div className="container md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start px-2 md:px-6 space-y-4 md:space-y-0 py-2 w-full">
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-green-500 w-[2px] h-7"></div>
            <Link className="font-medium text-2xl" href='/'>transferX</Link>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start">
            <button onClick={toggleCompany} className="md:hidden flex justify-between items-center font-semibold mb-2 w-full text-left">
              Company
              {isCompanyOpen ? <ChevronUp strokeWidth={1} /> : <ChevronDown strokeWidth={1} />}
            </button>
            <div className={`md:block ${isCompanyOpen ? 'block' : 'hidden'}`}>
              <h3 className="font-semibold mb-2 hidden md:block">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm hover:opacity-75">About us</Link></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row md:items-start">
            <button onClick={toggleQuickLinks} className="md:hidden flex justify-between items-center font-semibold mb-2 w-full text-left">
              Quick Links
              {isQuickLinksOpen ? <ChevronUp strokeWidth={1} /> : <ChevronDown strokeWidth={1} />}
            </button>
            <div className={`md:block ${isQuickLinksOpen ? 'block' : 'hidden'}`}>
              <h3 className="font-semibold mb-2 hidden md:block">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/link" className="text-sm hover:opacity-75">History</Link></li>
                <li><Link href="https://www.finoyou.in/" className="text-sm hover:opacity-75">Finoyou</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-2 mt-4 border-opacity-40 border-[#1e293b] py-2 text-center md:mx-6">
          <p className='font-normal text-sm mt-2'>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
