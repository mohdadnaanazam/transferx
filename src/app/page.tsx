"use client"
import { Navbar } from "@/components/Navbar/Navbar"
import { BackgroundBeams } from "../../ui/background-beams"
import { BackgroundGradientCard } from "@/components/BackgroundGradientCard"

export default function Home() {
  return (
    <main className="h-[100vh] relative w-full bg-zinc-900 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Navbar />
      <BackgroundGradientCard />
      <BackgroundBeams />
    </main>
  )
}
