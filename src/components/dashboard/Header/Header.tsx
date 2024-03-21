'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"

import { ThemeToggle } from "../../ThemeToggle"
import { UserAvatar } from "../Avatar"

export const Header = () => {
  return (
    <div className="py-3 flex max-w-8xl px-7 w-full md:mx-auto flex-row justify-between border-b">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-0 w-[2px] h-7' />
        <Link className="font-medium text-2xl" href='/'>transferr</Link>
      </div>

      <Input placeholder="Search Space" className="w-5/12" />
      <div className="flex flex-row gap-8 justify-around items-center">
        <ThemeToggle />
        <UserAvatar />
      </div>
    </div>
  )
}
