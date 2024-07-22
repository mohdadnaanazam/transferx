import { signOut } from 'next-auth/react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface User {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

export const CustomAvatar = ({ user }: { user: User | undefined }) => {
  console.log(user)
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className='cursor-pointer border'>
          {user?.image ? <AvatarImage src={user.image} alt={user.name ?? 'User image'} /> : <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>}
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='w-fit p-3 m-2'>
        <p className="block px-4 py-2 text-sm w-full text-left">{user?.name || 'Anonymous'}</p>
        <button onClick={() => signOut()} className="block px-4 py-2 text-sm  w-full text-left">Logout</button>
      </PopoverContent>
    </Popover>
  )
}
