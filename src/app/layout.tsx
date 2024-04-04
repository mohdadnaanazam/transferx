'use client'

import "../app/globals.css"

import { cn } from "@/lib/utils"
import { dmSans } from "../lib/fonts"
import { Header } from "@/components/Header"
import { ThemeProvider } from '../components/Providers/Theme/ProviderTheme'
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"

import { SessionProvider } from "next-auth/react"
import { Analytics } from "@vercel/analytics/react"
import { ViewProvider } from "@/context/view-context"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <body className={cn("h-full bg-background font-sans antialiased", dmSans.variable)}>
          <Toaster />

          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme={'dark'} enableSystem>
              <AuthProvider>
                <div className="h-full flex flex-col">
                  <Header />
                  <div className="flex-1">
                    {children}

                    <Analytics />
                  </div>
                  <div className="relative h-full flex min-h-screen flex-col">
                    {isLoggedIn ? <DashboardHeader /> : <Header />}
                    <div className="flex-1">{children}</div>
                  </div>
                  <div className="relative h-full flex min-h-screen flex-col">
                    <Header />
                    <div className="flex-1">{children}</div>
                  </div>
              </AuthProvider>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
