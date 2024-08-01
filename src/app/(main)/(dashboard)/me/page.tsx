"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

import { Home } from "@/components/pages/Home"

export default function SideNavbar() {
  const { status } = useSession()

  if (status === "unauthenticated") {
    redirect("/")
  }

  return <Home />
}
