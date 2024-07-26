'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { MaxWidthContainer } from '../MaxWidthContainer'

export const Navbar = () => {
	const path = usePathname()

	return (
		<MaxWidthContainer className="hidden md:block bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg mx-auto sticky top-0 py-2 z-10 max-w-screen-3xl">
			<div className="mx-auto flex items-center justify-between h-full">
				<div className='flex justify-between items-center flex-row space-x-0'>
					<div className='flex space-x-1'>
						<div className='bg-green-0 w-[2px] h-7' />
						<Link className="font-medium text-2xl" href='/me'>transferX</Link>
					</div>

					<div className="flex items-center w-2/6 space-x-4 justify-center">
						<div className="hidden md:flex space-x-4">
							<NavLink href='/me' name='Home' path={path} />
							<NavLink href='/me/assets' name='Assets' path={path} />
							<NavLink href='/me/folders' name='Folders' path={path} />
						</div>
					</div>
				</div>
				<div className="hidden md:block space-x-4">
					<Button variant="outline">Upload</Button>
				</div>
			</div>
		</MaxWidthContainer>
	)
}

export default Navbar

function NavLink({ href, name, path }: { href: string, name: string, path: string }) {
	return <Link href={href} className={`dark:text-gray-400 py-1 px-3  text-gray-900 dark:hover:text-white dark:hover:bg-gray-900 hover:rounded-t-lg ${path === href ? 'border-b-2 border-white dark:text-white' : ''}`}>{name}</Link>
}
