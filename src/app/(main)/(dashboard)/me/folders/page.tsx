import { Folder, EllipsisVertical } from 'lucide-react'
import DashboardCard from "@/components/DashboardCard/DashboardCard"
export default function Folders() {

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md  border-neutral-200 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-wrap justify-start gap-4 w-full m-2">
          {[...new Array(8)].map((_, i) => (
            <div key={i} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] rounded-lg bg-gray-100 dark:bg-neutral-800 p-2">
              <div className='flex justify-between items-center'>
                <button className='flex justify-start gap-x-4'>
                  <Folder strokeWidth={1}/>
                  <p>Photos</p>
                </button>
                <button>
                  <EllipsisVertical strokeWidth={1}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
