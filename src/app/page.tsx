"use client"
import { NavbarDemo } from "@/components/Navbar"
import { SparklesCore } from "../components/ui/sparkles"
import UploadForm from "@/components/UploadForm"

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <NavbarDemo />
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <UploadForm />
      </div>
    </main>
  )
}
