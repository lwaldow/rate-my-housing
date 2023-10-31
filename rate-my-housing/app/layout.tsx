import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })

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
      <body className={playfair.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

