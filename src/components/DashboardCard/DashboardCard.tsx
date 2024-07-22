import Image from "next/image";
import { EllipsisVertical, PackageOpen, Pickaxe, Pencil, FolderOpen, ArrowDownToLine, Share2, ChevronsLeftRight, FolderPen, Images, Trash2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import folder from '../../../public/folder.png';

function DashboardCard() {
  return (
    <div className="relative h-full w-full rounded-lg">
      <Image
        src={folder}
        alt="image"
        fill
        style={{ objectFit: "contain" }}
        className="rounded-lg"
      />

      <Popover>
        <PopoverTrigger asChild>
          <div className="absolute top-2 right-10 cursor-pointer">
            <ChevronsLeftRight />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-20 p-2">
          <button className="outline-none text-center mx-auto">copy url</button>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <div className="absolute top-2 right-2 cursor-pointer">
            <EllipsisVertical />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid gap-4">
                <button className="flex justify-start items-center w-full">
                  <PackageOpen className="mr-4" />
                  <span>Open</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <Pickaxe className="mr-4" />
                  <span>Advance Editing</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <Pencil className="mr-4" />
                  <span>Edit</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <FolderOpen className="mr-4" />
                  <span>Open Containing Folder</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <ArrowDownToLine className="mr-4" />
                  <span>Download</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <Share2 className="mr-4" />
                  <span>Share</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <ChevronsLeftRight className="mr-4" />
                  <span>Copy URL</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <FolderPen className="mr-4" />
                  <span>Rename</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <Images className="mr-4" />
                  <span>Add to Collection</span>
                </button>
                <button className="flex justify-start items-center w-full">
                  <Trash2 className="mr-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DashboardCard;
