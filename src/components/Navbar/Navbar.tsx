'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="border-[1px] p-2">
			<div className="container mx-auto flex items-center justify-between">
				<div className='flex justify-center items-center flex-row space-x-2'>
					<div className='bg-green-0 w-[2px] h-7' />
					<Link className="font-medium text-2xl" href='/'>transferX</Link>
				</div>
				<div className="flex items-center space-x-4">
					<div className="hidden md:flex space-x-4">
						<Link href="me" className="dark:text-gray-300 text-gray-900 hover:text-white">Home</Link>
						<Link href="#" className="dark:text-gray-300 text-gray-900 hover:text-white">Assets</Link>
						<Link href="#" className="dark:text-gray-300 text-gray-900 hover:text-white">Folders</Link>
						<Link href="#" className="dark:text-gray-300 text-gray-900 hover:text-white">Collections</Link>
						<Link href="#" className="dark:text-gray-300 text-gray-900 hover:text-white">Moderation</Link>
					</div>
				</div>
				<div className="hidden md:flex items-center space-x-4">
					<div className='flex justify-start items-center dark:bg-[#020817] border-[1px] rounded-md px-2'>
						<input type="text" placeholder="Search Media" className="p-2 dark:text-white outline-none dark:bg-[#020817]" />
						<button><Search /></button>
					</div>
					<button className="bg-green-0 text-white px-4 py-2 rounded">Upload</button>
					<ThemeToggle />
				</div>
				<button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} > ☰ </button>
			</div>
			{isOpen && (
				<div className="md:hidden mt-4 space-y-2">
					<Link href="#" className="block text-gray-300 hover:text-white">Home</Link>
					<Link href="#" className="block text-gray-300 hover:text-white">Assets</Link>
					<Link href="#" className="block text-gray-300 hover:text-white">Folders</Link>
					<Link href="#" className="block text-gray-300 hover:text-white">Collections</Link>
					<Link href="#" className="block text-gray-300 hover:text-white">Moderation</Link>
					<input type="text" placeholder="Search Media Library" className="p-2 w-full rounded bg-gray-700 text-white" />
					<button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
				</div>
			)}
		</nav>
	)
}

export default Navbar
