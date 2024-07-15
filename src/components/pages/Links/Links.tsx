'use client'

import { Check, X } from "lucide-react"
import { useLiveQuery } from "dexie-react-hooks"
import { useState } from "react"

import { db } from "@/offline/db.model"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { handleDownload } from "@/components/DownloadCard/DownloadCard"
import { PreviewPanel } from "@/components/PreviewPanel"

export const Links = () => {
  const links = useLiveQuery(() => db.links.toArray()) || []
  const [copiedLinkId, setCopiedLinkId] = useState<string | null>(null)

  const handleCopy = (shortURL: string, id: string) => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortURL}`)
    setCopiedLinkId(id)

    setTimeout(() => {
      setCopiedLinkId(null)
    }, 1000)
  }

  return (
    <Table className="mt-6">
      <TableCaption>{(links?.length > 0) ? '' : 'No data available'}</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Status</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Download URL</TableHead>
          <TableHead>Expiry</TableHead>
          <TableHead>Shareable URL</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {links?.map((link) => (
          <TableRow key={link.id}>
            <TableCell className="font-medium">
              {(new Date(link?.expiryDate) < new Date()) ? <X className="text-red-500" /> : <Check className="text-green-500" />}
            </TableCell>

            <TableCell>{link?.name}</TableCell>

            <TableCell>
              <p className="cursor-pointer" onClick={() => handleDownload(link?.downloadURL, link?.name, link?.file_type)}>Download</p>
            </TableCell>

            <TableCell>{new Date(link?.expiryDate).toLocaleDateString()}</TableCell>

            <TableCell className="cursor-pointer">
              <div onClick={() => handleCopy(link?.shortURL, link.id)}>
                {copiedLinkId === link.id ? <span className="tooltip">Copied!</span> : "COPY"}
              </div>
            </TableCell>

            <TableCell>
              <PreviewPanel url={link?.previewURL} type={link?.file_type} downloadableURL={link?.downloadURL} fileName={link?.name} handleDownload={handleDownload} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
