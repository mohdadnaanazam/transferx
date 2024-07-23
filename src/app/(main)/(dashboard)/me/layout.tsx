'use client'

import { useState } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Sidebar, SidebarBody, SidebarLink } from '../../../../components/ui/sidebar'
import { CustomAvatar } from "@/components/Avatar"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconHistory
} from "@tabler/icons-react"
import { Navbar } from "@/components/Navbar"

const links = [
  {
    label: "Dashboard",
    href: "/me",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "History",
    href: "/me/history",
    icon: (
      <IconHistory strokeWidth={2} className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    onClick: signOut,
    icon: (
      <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
]

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <Navbar />
      <div className={cn("rounded-md flex flex-col dark:bg-[#020817] md:flex-row w-full flex-1 mx-auto overflow-hidden mb-10 mr-10")}>
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10 dark:bg-[#020817] h-[90vh]">
            <div className="flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <CustomAvatar user={session?.user} allowPopover={false} />
          </SidebarBody>
        </Sidebar>
        {children}
      </div>
    </>
  )
}
