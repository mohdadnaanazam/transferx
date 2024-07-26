import FolderCard from "@/components/FolderCard/FolderCard"

export default function Folders() {

  return (
    <div className="">
      <div className="p-2 md:p-10 rounded-tl-md border-neutral-200 bg-white dark:bg-[#020817] w-full h-full mr-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full m-2 overflow-x-hidden">
          {[...new Array(8)].map((_, i) => (
            <FolderCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
