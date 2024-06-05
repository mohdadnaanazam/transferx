"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format, addDays } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface Props {
  onChange: (e: Date | undefined) => void
  value: Date
}

export const DatePicker = (props: Props) => {
  const { onChange, value } = props
  const today = new Date()
  const maxDate = addDays(today, 31)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal border-0 border-b rounded-none pl-0 hover:bg-transparent",
            !value && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          onSelect={(e) => onChange(e)}
          initialFocus
          disabled={{
            before: today,
            after: maxDate
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
