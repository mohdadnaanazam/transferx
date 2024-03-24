import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from 'next-auth/react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface User {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

export const UserAvatar = ({ user }: { user: User | undefined }) => {

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className='cursor-pointer'>
          {user?.image ? <AvatarImage src={user.image} alt={user.name ?? ''} /> : <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>}
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='w-fit p-3 m-2'>
          <p className="block px-4 py-2 text-sm w-full text-left">{user?.name || 'Anonymous'}</p>
          {/* <button disabled className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Profile</button> */}
          <button onClick={() => signOut()} className="block px-4 py-2 text-sm  w-full text-left">Logout</button>
      </PopoverContent>
    </Popover>
  )
}
