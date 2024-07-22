import { SideNavbar } from "@/components/Sidebar"
import { Navbar } from "@/components/Navbar"
export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
  return <><Navbar/><SideNavbar/>{children}</>
}
