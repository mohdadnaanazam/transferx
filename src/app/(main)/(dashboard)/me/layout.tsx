import { DashboardSidebar } from "@/components/DashboardSidebar/DashboardSidebar"

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="h-full flex-1 w-full">
        <div className="flex h-full relative w-full flex-1">

          <DashboardSidebar />

          <div className="h-full w-full pl-10 pt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
