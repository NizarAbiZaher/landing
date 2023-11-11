import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { Navbar } from '@/components/navbar'
import Main from '@/components/main'
import { AuthProvider } from './providers'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NizzyABI',
  description: 'The Ultimate Way To Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <AuthProvider>
            {children}
          </AuthProvider>
          
        </ThemeProvider>
      </body>
    </html>
  )
}
