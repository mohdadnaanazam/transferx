'use client'

import Link from "next/link"
import { useTheme } from "next-themes"
import { signIn, useSession } from "next-auth/react"

import { MaxWidthContainer } from "../MaxWidthContainer"

export const Header = () => {
  const { setTheme } = useTheme()
  const { status } = useSession()
  const isLoggedIn = status === 'authenticated'
  setTheme('dark')

  return (
    !isLoggedIn &&
    <MaxWidthContainer className="py-3 flex flex-row justify-between">
      <div className='flex justify-center items-center flex-row space-x-2'>
        <div className='bg-green-0 w-[2px] h-7' />
        <Link className="font-medium text-2xl" href='/'>transferX</Link>
      </div>

      <div className="flex flex-row gap-3 justify-around items-center">
        <Link href='/pricing'>Pricing</Link>
        <button onClick={() => signIn()}>Login</button>
      </div>
    </MaxWidthContainer>
  )
}
