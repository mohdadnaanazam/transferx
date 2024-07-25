import DashboardCard from "@/components/DashboardCard/DashboardCard"
import FolderCard from "@/components/FolderCard/FolderCard"
export default function Folders() {

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md  border-neutral-200 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-wrap justify-start gap-4 w-full m-2">
          {[...new Array(8)].map((_, i) => (
            <FolderCard key={i}/>
          ))}
        </div>
      </div>
    </div>
  )
}
