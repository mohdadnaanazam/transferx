'use client'

import { Check, X } from "lucide-react"
import { useLiveQuery } from "dexie-react-hooks"

import { db } from "@/offline/db.model"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { handleDownload } from "@/components/DownloadCard/DownloadCard"
import { BorderMagicButton } from "@/components/Buttons"
import { PreviewPanel } from "@/components/PreviewPanel"

export const Links = () => {
  const links = useLiveQuery(() => db.links.toArray()) || []

  return (
    <Table className="mt-6">
      <TableCaption>{(links?.length > 0) ? '' : 'No data available'}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          {/* <TableHead className="w-[100px]">Id</TableHead> */}
          <TableHead>Name</TableHead>
          <TableHead>Download URL</TableHead>
          <TableHead>Expiry</TableHead>
          <TableHead>Shareable URL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {links?.map((link) => (
          <TableRow key={link.id}>
            <TableCell className="font-medium">
              {link?.isExpired ? <X className="text-red-500" /> : <Check className="text-green-500" />}
            </TableCell>
            {/* <TableCell className="font-medium">{link?.id}</TableCell> */}
            <TableCell>{link?.name}</TableCell>
            <TableCell>
              <BorderMagicButton onClick={() => handleDownload(link?.downloadURL, link?.name, "image")}>Download</BorderMagicButton>
            </TableCell>
            <TableCell>{new Date(link?.expiryDate).toLocaleDateString()}</TableCell>
            <TableCell className="cursor-pointer"><p onClick={() => { navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${link?.shortURL}`) }}>COPY</p></TableCell>
            <TableCell className="cursor-pointer">
              <PreviewPanel url={link?.previewURL} type={link?.file_type || 'image'} downloadableURL={link?.downloadURL} fileName={link?.name} handleDownload={handleDownload} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
