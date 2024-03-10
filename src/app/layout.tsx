'use client'

import "../app/globals.css"

import { dmSans } from "../lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from '../components/Providers/Theme/ProviderTheme'
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/Header"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLight, setIsLight] = useState(false)
  const themeIcon = isLight ? <Moon size={20} strokeWidth={1} /> : <Sun size={20} strokeWidth={1} />
  const themeText = isLight ? 'light' : 'dark'
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", dmSans.variable)}>
          <Toaster />
          <ThemeProvider attribute="class" defaultTheme={themeText || 'system'} enableSystem>
            <Header themeIcon={themeIcon} isLight={isLight} setIsLight={setIsLight} />
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
