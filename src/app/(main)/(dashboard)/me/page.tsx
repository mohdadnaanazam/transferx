"use client";

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

import { Dashboard } from "@/components/Dashboard"

export default function SideNavbar() {
  const { status } = useSession()

  if (status === "unauthenticated") {
    redirect("/");
  }

  return <Dashboard />
}
