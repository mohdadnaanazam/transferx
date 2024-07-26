import { Folder, EllipsisVertical, PackageOpen, Pickaxe, Pencil, FolderOpen, ArrowDownToLine, Share2, ChevronsLeftRight, FolderPen, Images, Trash2 } from 'lucide-react'

import OperationCard from "../OperationCard/OperationCard";

const popOverContent = [
  {
    "index": 0,
    "icon": <PackageOpen strokeWidth={1} size={20} />,
    "text": "Open"
  },
  {
    "index": 1,
    "icon": <Pickaxe strokeWidth={1} size={20} />,
    "text": "Advance Editing"
  },
  {
    "index": 2,
    "icon": <Pencil strokeWidth={1} size={20} />,
    "text": "Edit"
  },
  {
    "index": 3,
    "icon": <FolderOpen strokeWidth={1} size={20} />,
    "text": "Open Folder"
  },
  {
    "index": 4,
    "icon": <ArrowDownToLine strokeWidth={1} size={20} />,
    "text": "Download"
  },
  {
    "index": 5,
    "icon": <Share2 strokeWidth={1} size={20} />,
    "text": "Share"
  },
  {
    "index": 6,
    "icon": <ChevronsLeftRight strokeWidth={1} size={20} />,
    "text": "Copy URL"
  },
  {
    "index": 7,
    "icon": <FolderPen strokeWidth={1} size={20} />,
    "text": "Rename"
  },
  {
    "index": 8,
    "icon": <Images strokeWidth={1} size={20} />,
    "text": "Add to Collection"
  },
  {
    "index": 9,
    "icon": <Trash2 strokeWidth={1} size={20} />,
    "text": "Delete"
  }
]

function FolderCard() {
  return (
    <div className="w-full rounded-lg dark:hover:bg-accent border p-2 overflow-hidden">
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-x-4">
          <Folder strokeWidth={1} />
          <p className="truncate">Photos</p>
        </button>
        <button>
          <OperationCard
            triggerIcon={<EllipsisVertical strokeWidth={1} size={20} />}
            links={popOverContent}
          />
        </button>
      </div>
    </div>
  )
}

export default FolderCard
