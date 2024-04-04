'use client'

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CardWithForm } from "../CardWithForm"
import { SalesProvider } from "@/context/upload-context"

export const UplaodDialog = (): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='fixed bottom-5 right-5' variant="outline" size="icon" >
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-transparent text-transparent border-transparent">
        <SalesProvider>
          <CardWithForm />
        </SalesProvider>
      </DialogContent>
    </Dialog>
  )
}
