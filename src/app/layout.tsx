import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { openGraphImage } from '@/components/constants/MetadataImage'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vuong Hong Linh resume',
  description: 'hmm, this is my resume built based on Nextjs. what else?',
  openGraph: {
    ...openGraphImage,
    title: 'CV của Lĩnh đẹp trai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
