'use client'
import Link from "next/link"

import { Button } from "../ui/button"
import { ThemeToggle } from "../ThemeToggle"

export const Header = () => {
  return (
    <div className="p-3 flex flex-row justify-between">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-700 w-1 h-7'></div>
        <h1 className='text-2xl font-medium'>transferr</h1>
      </div>
      <div className="flex flex-row justify-around w-1/6 items-center">
        <Link href={'/'}>Pricing</Link>
        
        <Button>Register</Button>

        <ThemeToggle />
      </div>
    </div>
  )
}
