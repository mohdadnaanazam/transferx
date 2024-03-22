'use client'

import { useState } from 'react'
import { LampContainer } from '../ui/lamp'
import { motion } from "framer-motion"
import { useToast } from "../ui/use-toast"
import { Button } from '../ui/button'
import { MailPlus } from 'lucide-react'



export const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
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
      toast({ title: "Error", description: 'Error:' + error })
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
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Join the waitlist
      </motion.h1>

      <motion.form onSubmit={handleSubmit}>
        <div className='flex flex-row space-x-3 items-center justify-center'>
          <motion.input
            onChange={handleChange}
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            placeholder='hi@transferr.me'
            disabled={isSubmitting}
            value={email}
            className="rounded-lg border py-2 px-3 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700">
          </motion.input>
          <motion.button
            type='submit'
            disabled={isSubmitting}
            initial={{ opacity: 0.5, y: 100 }}
            whileHover={{ opacity: 1, scale: 1, color: 'gray' }}
            whileTap={{ scale: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='mt-3'> <MailPlus strokeWidth={1.5} className="h-7 w-7" />
          </motion.button>
        </div>
      </motion.form>

    </LampContainer>
  )
}
