'use client'

import "../app/globals.css"
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono'

import { cn } from "@/lib/utils"
import { Header } from "@/components/Header"
import { ThemeProvider } from '../components/Providers/Theme/ProviderTheme'
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"

import { SessionProvider } from "next-auth/react"
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer/Footer"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <body className={cn("h-full bg-background font-sans antialiased")}>
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
                  <Footer />
                </div>
              </AuthProvider>
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
