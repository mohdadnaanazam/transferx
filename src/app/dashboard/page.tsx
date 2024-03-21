import { Sidebar } from "@/components/dashboard/sidebar";

export default async function Dashboard() {

  return (
    <main className="flex justify-between h-full mt-1">
      <Sidebar />
      <div className="w-10/12 border">main</div>
    </main>
  )
}