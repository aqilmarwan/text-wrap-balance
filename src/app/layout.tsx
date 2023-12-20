import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import './globals.css'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSS Text Balancing with text-wrap:balance',
  description: 'A Revolutionary CSS Feature',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>
          <Button />
        </div>
        <Footer />
      </body>
    </html>
  )
}
