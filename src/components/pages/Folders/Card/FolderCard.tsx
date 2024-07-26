import { Folder, EllipsisVertical } from 'lucide-react'

export const FolderCard = () => {
  return (
    <div className="w-full rounded-lg dark:hover:bg-accent border p-2 overflow-hidden">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-x-4">
          <Folder strokeWidth={1} />
          <p className="truncate text-sm">Photos</p>
        </button>
        <button>
          <EllipsisVertical strokeWidth={1} size={18} />
        </button>
      </div>
    </div>
  )
}
