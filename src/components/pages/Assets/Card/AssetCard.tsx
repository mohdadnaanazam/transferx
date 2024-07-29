"use client"

import Image from "next/image"
import { useState } from "react"
import { EllipsisVertical, PackageOpen, Pickaxe, Pencil, FolderOpen, ArrowDownToLine, Share2, ChevronsLeftRight, FolderPen, Images, Trash2 } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export const AssetCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const popOverContent = [
    {
      "index": 0,
      "icon": <PackageOpen strokeWidth={1} />,
      "text": "Open"
    },
    {
      "index": 1,
      "icon": <Pickaxe strokeWidth={1} />,
      "text": "Advance Editing"
    },
    {
      "index": 2,
      "icon": <Pencil strokeWidth={1} />,
      "text": "Edit"
    },
    {
      "index": 3,
      "icon": <FolderOpen strokeWidth={1} />,
      "text": "Open Containing Folder"
    },
    {
      "index": 4,
      "icon": <ArrowDownToLine strokeWidth={1} />,
      "text": "Download"
    },
    {
      "index": 5,
      "icon": <Share2 strokeWidth={1} />,
      "text": "Share"
    },
    {
      "index": 6,
      "icon": <ChevronsLeftRight strokeWidth={1} />,
      "text": "Copy URL"
    },
    {
      "index": 7,
      "icon": <FolderPen strokeWidth={1} />,
      "text": "Rename"
    },
    {
      "index": 8,
      "icon": <Images strokeWidth={1} />,
      "text": "Add to Collection"
    },
    {
      "index": 9,
      "icon": <Trash2 strokeWidth={1} />,
      "text": "Delete"
    }
  ]

  return (
    <div className="w-full h-48 rounded-lg bg-gray-100 dark:bg-neutral-800 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="relative h-full w-full rounded-lg">
        <Image
          src={'https://transferx-prod.s3.ap-south-1.amazonaws.com/850d6855-db46-4bcf-84f1-7aece5c2982a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T195621Z&X-Amz-Expires=86400&X-Amz-Signature=5562280e948af9de56081c36a073281e900bc19d9d15715f2f9cbada15dc88b4&X-Amz-SignedHeaders=host&x-id=GetObject'}
          alt="image"
          height={1000}
          width={1000}
          className="rounded-lg hover:opacity-60 h-full w-full"
        />
        {isHovered && (
          <>
            <div className="absolute top-2 left-2 z-20">
              <input type="checkbox" className="transform scale-150" />
            </div>
            <div className="absolute bottom-2 left-2 z-20">
              <p>{"Nature.png"}</p>
            </div>
            <div className="absolute top-2 right-2 gap-2 flex justify-center">
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
                        {popOverContent.map((popOverLinks) => (
                          <button key={popOverLinks.index} className="flex justify-start items-center w-full">
                            {popOverLinks.icon}
                            <span className="ml-4">{popOverLinks.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
