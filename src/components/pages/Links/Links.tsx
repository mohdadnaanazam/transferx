'use client'

import { ArrowDownToLine, Check, Copy, X } from "lucide-react"
import { useLiveQuery } from "dexie-react-hooks"

import { db } from "@/offline/db.model"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { handleDownload } from "@/components/DownloadCard/DownloadCard"
import { PreviewPanel } from "@/components/PreviewPanel"
import { useToast } from "@/components/ui/use-toast"
import TableShimmer from "@/components/TableShimmer/TableShimmer"

export const Links = () => {
  const { toast } = useToast()
  const links = useLiveQuery(() => db.links.toArray()) || []

  const handleCopy = async (shortURL: string, id: string) => {
    try {
      navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortURL}`)
      await toast({ title: "Link Copied", description: "The link copied to the clipboard." })
    } catch (error) {
      toast({ title: "Error", description: "Unable to copy link to clipboard." })
    }
  }

  if (links?.length <= 0) {
    return <TableShimmer />;
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
              <ArrowDownToLine className="cursor-pointer ml-6" onClick={() => handleDownload(link?.downloadURL, link?.name, link?.file_type)} />
            </TableCell>

            <TableCell>{new Date(link?.expiryDate).toLocaleDateString()}</TableCell>

            <TableCell className="cursor-pointer">
              <Copy className="ml-6" onClick={() => handleCopy(link?.shortURL, link.id)} />
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
