'use client'

import { useEffect, useState } from "react"
import { LoaderIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { useToast } from "../ui/use-toast"

interface Props {
  visible: boolean
  linkId: string
}

export const AskPin = (props: Props): JSX.Element => {
  const { visible = false, linkId = '' } = props
  const { toast } = useToast()

  // state
  const [userEnteredPin, setUserEnteredPin] = useState('')
  const [isPinMatched, setIsPinMatched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, []);

  /**
   * @description Handle to unlock pin
   * @returns void
   */
  const handleUnlockPin = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/verify-pin', {
        method: 'POST',
        body: JSON.stringify({ pin: userEnteredPin, linkId })
      })

      const jsonResponse = await response.json()

      // handle rate limit
      if (response.status === 429) {
        toast({ title: "Error", description: "Too many request please try again after 5 minutes" })
        return
      }

      if (!jsonResponse.is_pin_matched) {
        toast({ title: "Wrong PIN", description: "Please enter correct pin" })
      } else {
        setIsPinMatched(true)
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong" })
    } finally {
      setIsLoading(false)
    }
  }

  // for hydration issue
  if (!isMounted) {
    return <></>
  }

  return (
    <Dialog open={visible && !isPinMatched}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter link pin</DialogTitle>
          <DialogDescription>
            This link is pin protected please enter pin to access
          </DialogDescription>
        </DialogHeader>

        <div>
          <InputOTP
            maxLength={6}
            onChange={setUserEnteredPin}
            render={({ slots }) => (
              <>
                <InputOTPGroup>
                  {slots.slice(0, 3).map((slot, index) => <InputOTPSlot key={index} {...slot} />)}
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                  {slots.slice(3).map((slot, index) => <InputOTPSlot key={index} {...slot} />)}
                </InputOTPGroup>
              </>
            )}
          />
        </div>

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button disabled={userEnteredPin.length < 6} onClick={handleUnlockPin} type="button" variant="secondary">
              Unlock <LoaderIcon className={cn("animate-spin h-4 ml-1", { 'hidden': !isLoading })} />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
