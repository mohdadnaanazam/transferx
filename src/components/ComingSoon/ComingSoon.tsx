'use client'

import { motion } from "framer-motion"
import { useState } from 'react'
import { ChevronRight, LoaderIcon } from "lucide-react"
import * as z from 'zod'

import { LampContainer } from '../ui/lamp'
import { useToast } from "../ui/use-toast"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { emailSchema } from "@/utils/validation-schema"

type IValidationError = Record<string, string | undefined>

export const ComingSoon = () => {
  // init
  const { toast } = useToast()

  // states
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<IValidationError>({})

  // constant
  const isInvalidEmail = errors?.['email'] ?? false

  /**
   * @description Handle form submit
   * @param e
   * @returns void 
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // validating email
      const result = emailSchema.safeParse({ email })

      if (result.success || result.error.issues.length === 0) {
        setErrors({ ...errors, email: undefined })
      } else {
        const err = result.error
        if (err instanceof z.ZodError) {
          const errValues: IValidationError = {}

          console.log(err, 'hey')

          err.issues.forEach((item) => {
            if (item.path[0] === 'email') {
              errValues[String(item.path[0])] = item.message
            }
          })

          console.log(errValues, 'hey there i am errValues')
          return setErrors({ ...errors, ...errValues })
        }
      }

      setIsSubmitting(true)

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'GENERAL' })
      }
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/add-to-waitlist', options)

      const jsonResponse = await response.json()

      if (response.ok) {
        toast({ title: "Success", description: "Email added to waitlist successfully" })
        setEmail('')
      } else {
        toast({ title: "Failed", description: jsonResponse?.error || 'Failed to add to waitlist' })
      }

    } catch (error) {
      toast({ title: "Error", description: "Something went wrong" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Join the waitlist
      </motion.h1>

      <motion.form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className='flex flex-row space-x-3 items-center justify-center'>
          <motion.input onChange={handleChange} placeholder='hi@transferx.in' disabled={isSubmitting} value={email} className={cn("rounded-lg border py-2 px-2 min-w-72 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10  bg-neutral-950 placeholder:text-neutral-700", { 'border-cyan-500': isInvalidEmail })}>
          </motion.input>
          
          <Button disabled={!email} type='submit' variant="outline" size="icon">
            <ChevronRight className={cn("h-4 w-4", { 'hidden': isSubmitting })} />
            <LoaderIcon className={cn("animate-spin h-4 ml-1", { 'hidden': !isSubmitting })} />
          </Button>

        </motion.div>

        <p className={cn("text-sm font-light mt-2 opacity-0 h-2 text-cyan-500", { 'opacity-1': isInvalidEmail  })}>{errors?.['email']}</p>

      </motion.form>
    </LampContainer>
  )
}
