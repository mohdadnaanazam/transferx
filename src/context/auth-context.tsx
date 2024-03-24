'use client'

import { LoaderIcon } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { createContext, useEffect } from "react"

const Loading = () => {
  return (
    <div className="flex h-screen flex-1 justify-center items-center">
      <LoaderIcon className="animate-spin h-24 ml-1" />
    </div>
  )
}

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

  return (
    <AuthContext.Provider value={{ session, status }}>
      {status === 'loading'? <Loading /> : children}
    </AuthContext.Provider>
  )
}