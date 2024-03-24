'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { createContext, useEffect } from "react"


export const AuthContext = createContext<{}>({ session: {}, status: 'loading' })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // init
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (!session) {
      router.replace('/')
    } else {
      router.replace('/me')
    }
  }, [status, session])

  console.log('session', session)



  return <AuthContext.Provider value={{ session, status }}>{children}</AuthContext.Provider>
}