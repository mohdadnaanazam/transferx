"use client"

import { useState } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { Sidebar, SidebarBody, SidebarLink } from '../../../../components/ui/sidebar'
import { Dashboard } from "@/components/Dashboard"
import { CustomAvatar } from "@/components/Avatar"

export default function SideNavbar() {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()

  const links = [
    {
      label: "Dashboard",
      href: "#",
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
      label: "Logout",
      onClick: signOut,
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ]

  return (
    <div
      className={cn(
        "rounded-md flex flex-col bg-[#020817] md:flex-row w-full flex-1 mx-auto overflow-hidden mb-10 mr-10",
        "h-[80vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 dark:bg-[#020817]">
          <div className="flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
            <LogoIcon />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <CustomAvatar user={session?.user} allowPopover={false} />
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  )
}

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  )
}

