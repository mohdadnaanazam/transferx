import DashboardCard from "@/components/DashboardCard/DashboardCard"

const Folders = ({ }) => {

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md  border-neutral-200 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-wrap justify-start gap-2 w-full m-2">
          {[...new Array(8)].map((_, i) => (
            <div key={i} className="w-full sm:w-[48%] lg:w-[32%] h-56 rounded-lg bg-gray-100 dark:bg-neutral-800">
              <DashboardCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Folders
