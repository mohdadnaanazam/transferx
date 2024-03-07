"use client"
import { Navbar } from "@/components/Navbar/Navbar"
import { BackgroundBeams } from "../../ui/background-beams"
import { UploadCard } from "@/components/UploadCard"

export default function Home() {
  return (
    <main className="h-[100vh] relative w-full bg-zinc-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Navbar />
      <UploadCard />
      <BackgroundBeams />
    </main>
  )
}
