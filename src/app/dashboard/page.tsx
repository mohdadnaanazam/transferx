import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function Dashboard() {

  return (
    <main className="flex justify-between h-full mt-1">
      <Sidebar />
      <div className="w-10/12 border">main</div>
      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </main>
  )
}
