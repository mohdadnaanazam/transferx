import { DashboardSidebar } from "@/components/DashboardSidebar/DashboardSidebar"

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full relative dark:bg-[#020817] md:flex-row w-full flex-1 mx-auto mb-10 pr-10">
      <DashboardSidebar />
      <div className="mx-auto overflow-y-hidden w-full">
        {children}
      </div>
    </div>
  )
}
