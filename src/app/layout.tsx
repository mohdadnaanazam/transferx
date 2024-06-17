'use client'

import "../app/globals.css"

import { cn } from "@/lib/utils"
import { dmSans } from "../lib/fonts"
import { Header } from "@/components/Header"
import { ThemeProvider } from '../components/Providers/Theme/ProviderTheme'
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"
import { SessionProvider } from "next-auth/react"
import { Footer } from '@/components/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", dmSans.variable)}>
          <Toaster />
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme='dark' enableSystem>
              <AuthProvider>
                <div className="relative h-full flex min-h-screen flex-col">
                  <Header />
                  <div className="flex-1">{children}</div>
                  <Footer/>
                </div>
              </AuthProvider>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
