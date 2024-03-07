"use client"
import React from "react"
import { BackgroundGradient } from "../../../ui/background-gradient"

export const BackgroundGradientCard = () => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="h-48 border rounded-[22px]">
      upload icon
      </div>
      <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
        Upload files
      </p>

      <p className="text-sm text-neutral-400">
        Drag & drop your files here to get the trasferable link
      </p>
    </BackgroundGradient>
  )
}
