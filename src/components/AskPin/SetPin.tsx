'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { Lock, LockOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

export const SetPin = (props: { setPin: Dispatch<SetStateAction<string | null>> }): JSX.Element => {
  const { setPin } = props
  const [userEnteredPin, setUserEnteredPin] = useState('')
  const [lockStatus, setLockStatus] = useState<boolean>(false)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={lockStatus} variant="outline" className="space-x-2 p-3 flex flex-row justify-between"> <span className="pr-1">Lock with pin</span> {lockStatus ? <Lock size={16} strokeWidth={1.25} /> : <LockOpen size={16} strokeWidth={1.25} />}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter link pin</DialogTitle>
          <DialogDescription>
            This link will be protected with the entered pin
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
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
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              disabled={userEnteredPin.length < 6}
              onClick={() => {
                setPin(userEnteredPin);
                setLockStatus(!lockStatus);
              }}
              type="button"
              variant="secondary" >
              Lock
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
