'use client'
import Link from "next/link"

import { ThemeToggle } from "../ThemeToggle"

export const Header = () => {
  return (
    <div className="p-3 px-8 flex flex-row justify-between">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-0 w-[2px] h-7' />
        <Link className="font-medium text-2xl" href='/' >transferr</Link>
      </div>

      <div className="flex flex-row justify-around items-center">
        <Link href='/pricing' className="mr-4">Pricing</Link>

        <ThemeToggle />
      </div>
    </div>
  )
}
