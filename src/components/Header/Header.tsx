'use client'
import { Button } from "../ui/button"
import Link from "next/link"

export const Header = ({ themeIcon, isLight, setIsLight }: any) => {

  return (
    <div className="p-3 flex flex-row justify-between">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-700 w-1 h-7'></div>
        <h1 className='text-2xl font-medium'>transferr</h1>
      </div>
      <div className="flex flex-row justify-around w-1/6 items-center">
        <Link href={'/'}>Pricing</Link>
        <Button>Register</Button>
        <div onClick={() => setIsLight(!isLight)}>{themeIcon}</div>
      </div>
    </div>
  )
}
