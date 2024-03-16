'use client'
import Link from "next/link"

import { ThemeToggle } from "../ThemeToggle"

export const Header = () => {
  return (
    <div className="py-3 flex max-w-7xl w-full md:mx-auto px-5 flex-row justify-between">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-0 w-[2px] h-7' />
        <Link className="font-medium text-2xl" href='/'>transferr</Link>
      </div>

      <div className="flex flex-row justify-end space-x-10 w-2/6 items-center">
        <Link href='/pricing'>Pricing</Link>
        <ThemeToggle />
      </div>
    </div>
  )
}
