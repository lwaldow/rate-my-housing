import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RateMyHousing',
  description: 'CS320 Group 4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssBaseline/>
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

