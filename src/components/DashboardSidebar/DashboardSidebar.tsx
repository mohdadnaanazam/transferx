"use client"

import { Sidebar, SidebarBody, SidebarLink } from '../../components/ui/sidebar'
import { IconArrowLeft, IconHistory, IconFolder, IconFile3d } from "@tabler/icons-react"
import { signOut, useSession } from "next-auth/react"
import { useState } from 'react'
import { CustomAvatar } from '../Avatar'


const links = [
  {
    label: "Assets",
    href: "/me/assets",
    type: "navigation",
    icon: (
      <IconFile3d strokeWidth={1} className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Folders",
    href: "/me/folders",
    type: "navigation",
    icon: (
      <IconFolder strokeWidth={1} className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "History",
    href: "/me/history",
    icon: (
      <IconHistory strokeWidth={1} className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    onClick: signOut,
    icon: (
      <IconArrowLeft strokeWidth={1} className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
]

type Props = {}

export const DashboardSidebar = ({ }: Props) => {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <aside className='h-[93vh] relative z-50'>
      <div className='fixed top-0 bottom-0 md:border-r-[0.1px] h-full'>
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10 pt-10 dark:bg-[#020817]">
            <div className="flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} className='gap-4' />
                ))}
              </div>
            </div>
            <CustomAvatar user={session?.user} allowPopover={false} />
          </SidebarBody>
        </Sidebar>
      </div>
    </aside>
  )
}
