'use client'

import { ArrowDownToLine, Check, Copy, X, ArrowUp, ArrowDown } from "lucide-react"
import { useLiveQuery } from "dexie-react-hooks"
import { useState, useEffect, useMemo } from "react"

import { db } from "@/offline/db.model"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { handleDownload } from "@/components/DownloadCard/DownloadCard"
import { PreviewPanel } from "@/components/PreviewPanel"
import { useToast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const Links = () => {
  const { toast } = useToast()
  const [ascSorted, setAscSorted] = useState(false);
  const [sortedLinks, setSortedLinks] = useState<any>([]);

 const liveLinks = useLiveQuery(() => db.links.toArray(), [db]);
 const links = useMemo(() => liveLinks || [], [liveLinks])

  useEffect(() => {
    console.log('check')
    setSortedLinks(links)
  }, [links])

  const handleCopy = async (shortURL: string, id: string) => {
    try {
      navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortURL}`)
      toast({ title: "Link Copied", description: "The link copied to the clipboard." })
    } catch (error) {
      toast({ title: "Error", description: "Unable to copy link to clipboard." })
    }
  }

  const handleSort = () => {
    const sorted = [...sortedLinks].sort((a, b) => {
      return ascSorted
        ? new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime()
        : new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
    })
    setAscSorted(!ascSorted)
    setSortedLinks(sorted)
  }

  return (
    <div className="pt-7 h-full">
      <h2 className="text-3xl font-semibold">Recent Links</h2>
      <Table className="mt-6">
        <TableCaption className="text-xl mt-24 font-semibold tracking-wide ">{(links?.length > 0) ? '' : 'No links found'}</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] px-0">Status</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Download URL</TableHead>
            <TableHead className="flex justify-start items-center gap-x-1">
              Expiry {ascSorted ? <ArrowUp strokeWidth={1} onClick={handleSort} /> : <ArrowDown strokeWidth={1} onClick={handleSort} />}
            </TableHead>
            <TableHead>Shareable URL</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>

        <TooltipProvider>
          <TableBody>
            {sortedLinks?.map((link: any) => (
              <TableRow key={link?.id}>
                <TableCell className="font-medium">
                  {(new Date(link?.expiryDate) < new Date()) ? <X className="text-red-500" /> : <Check className="text-green-500" />}
                </TableCell>

                <TableCell>
                  <Tooltip>
                    <TooltipTrigger className="ml-auto">
                      {link?.name?.length > 15 ? link?.name.slice(0, 15) + '....' : link?.name}
                    </TooltipTrigger>
                    <TooltipContent>
                      {link?.name}
                    </TooltipContent>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <ArrowDownToLine strokeWidth={1} className={`ml-6 ${(new Date(link?.expiryDate) < new Date()) ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={!(new Date(link?.expiryDate) < new Date()) ? () => handleDownload(link?.downloadURL, link?.name, link?.file_type) : undefined} />
                </TableCell>

                <TableCell>{new Date(link?.expiryDate).toLocaleDateString()}</TableCell>

                <TableCell className="cursor-pointer">
                  <Copy strokeWidth={1} className="ml-6" onClick={() => handleCopy(link?.shortURL, link.id)} />
                </TableCell>

                <TableCell>{!(new Date(link?.expiryDate) < new Date()) && <PreviewPanel s3Key={link?.s3Id} url={link?.previewURL} type={link?.file_type} downloadableURL={link?.downloadURL} fileName={link?.name} handleDownload={handleDownload} />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TooltipProvider>
      </Table>
    </div>
  )
}
