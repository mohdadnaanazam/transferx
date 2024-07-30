'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MaxWidthContainer } from '../MaxWidthContainer'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { StyledDropzone } from '../StyledDropzone'

export const Navbar = () => {
  const path = usePathname()

  return (
    <MaxWidthContainer className="fixed hidden md:block z-[51] bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg mx-auto top-0 py-2 max-w-screen-3xl">
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
          <Dialog>
            <DialogTrigger>
              <Button variant="outline">Upload</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files here</DialogTitle>
                <DialogDescription>
                  <StyledDropzone />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Navbar

function NavLink({ href, name, path }: { href: string, name: string, path: string }) {
  return <Link href={href} className={`dark:text-gray-400 py-1 px-3 text-sm text-gray-900 dark:hover:text-white dark:hover:bg-accent hover:rounded-lg hover:animate-pulse tracking-wide underline-offset-4 ${path === href ? ' dark:text-white hover:underline' : ''}`}>{name}</Link>
}
