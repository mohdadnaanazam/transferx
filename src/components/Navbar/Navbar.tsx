'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { MaxWidthContainer } from '../MaxWidthContainer'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const path = usePathname()

	return (
		<MaxWidthContainer className="hidden md:block border-b-[1px] bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg w-[90%] mx-auto py-2 sticky top-0 z-10">
			<div className="mx-auto flex items-center justify-between">
				<div className='flex justify-center items-center flex-row space-x-2'>
					<div className='bg-green-0 w-[2px] h-7' />
					<Link className="font-medium text-2xl" href='/me'>transferX</Link>
				</div>

				<div className="flex items-center w-2/6 space-x-4 justify-center">
					<div className="hidden md:flex space-x-4">
						<Link href="/me" className={`dark:text-gray-300 py-1 px-3 hover:text-gray-600 ${path === '/me' ? 'border-b-2 border-white' : ''}`}>Home</Link>
						<Link href="/me/assets" className={`dark:text-gray-300 py-1 px-3  text-gray-900 hover:text-gray-600 ${path === '/me/assets' ? 'border-b-2 border-white' : ''}`}>Assets</Link>
						<Link href="/me/folders" className={`dark:text-gray-300 py-1 px-3  text-gray-900 hover:text-gray-600 ${path === '/me/folders' ? 'border-b-2 border-white' : ''}`}>Folders</Link>
					</div>
				</div>
				<div className="hidden md:flex items-center space-x-4">
					<Button variant="outline">Upload</Button>
				</div>
			</div>
		</MaxWidthContainer>
	)
}

export default Navbar
