import Image from "next/image";
import { EllipsisVertical, PackageOpen, Pickaxe, Pencil, FolderOpen, ArrowDownToLine, Share2, ChevronsLeftRight, FolderPen, Images, Trash2, BoxSelect } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Assets() {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md border-neutral-200 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-wrap justify-start gap-2 w-full m-2">
          {[...new Array(8)].map((_, i) => (
            <div key={i} className="w-full sm:w-[48%] lg:w-[32%] h-56 rounded-lg bg-gray-100 dark:bg-neutral-800 group">
              <div className="relative h-full w-full rounded-lg">
                <Image
                  src={'https://transferx-prod.s3.ap-south-1.amazonaws.com/850d6855-db46-4bcf-84f1-7aece5c2982a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T195621Z&X-Amz-Expires=86400&X-Amz-Signature=5562280e948af9de56081c36a073281e900bc19d9d15715f2f9cbada15dc88b4&X-Amz-SignedHeaders=host&x-id=GetObject'}
                  alt="image"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg hover:opacity-60"
                />
                <div className="absolute top-2 left-2 z-20 hidden group-hover:block">
                  <input type="checkbox" className="transform scale-150" />
                </div>
                <div className="absolute bottom-2 left-2 z-20 hidden group-hover:block">
                  <p>{"Nature.png"}</p>
                </div>
                <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="cursor-pointer">
                        <ChevronsLeftRight strokeWidth={1} />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-20 p-2">
                      <button className="outline-none text-center mx-auto">copy url</button>
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="cursor-pointer">
                        <EllipsisVertical strokeWidth={1} />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-72">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <div className="grid gap-4">
                            <button className="flex justify-start items-center w-full">
                              <PackageOpen strokeWidth={1} className="mr-4" />
                              <span>Open</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <Pickaxe strokeWidth={1} className="mr-4" />
                              <span>Advance Editing</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <Pencil strokeWidth={1} className="mr-4" />
                              <span>Edit</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <FolderOpen strokeWidth={1} className="mr-4" />
                              <span>Open Containing Folder</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <ArrowDownToLine strokeWidth={1} className="mr-4" />
                              <span>Download</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <Share2 strokeWidth={1} className="mr-4" />
                              <span>Share</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <ChevronsLeftRight strokeWidth={1} className="mr-4" />
                              <span>Copy URL</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <FolderPen strokeWidth={1} className="mr-4" />
                              <span>Rename</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <Images strokeWidth={1} className="mr-4" />
                              <span>Add to Collection</span>
                            </button>
                            <button className="flex justify-start items-center w-full">
                              <Trash2 strokeWidth={1} className="mr-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
