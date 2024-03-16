'use client'

import "../app/globals.css"

import { cn } from "@/lib/utils"
import { dmSans } from "../lib/fonts"
import { Header } from "@/components/Header"
import { ThemeProvider } from '../components/Providers/Theme/ProviderTheme'
import { Toaster } from "@/components/ui/toaster"

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
          <ThemeProvider attribute="class" defaultTheme={'dark'} enableSystem>
            <div className="relative h-full flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
