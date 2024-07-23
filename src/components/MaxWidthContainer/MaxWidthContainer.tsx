import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
}

export const MaxWidthContainer = (props: Props) => {
  const { children, className } = props

  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-6 md:px-6', className)}>
      {children}
    </div>
  )
}
