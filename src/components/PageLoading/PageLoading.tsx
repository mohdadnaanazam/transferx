import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const PageLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <LoaderIcon className={cn("animate-spin h-52")} />
    </div>
  )
}
