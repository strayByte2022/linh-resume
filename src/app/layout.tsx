import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { openGraphImage } from '@/components/constants/MetadataImage'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vuong Hong Linh resume',
  description: 'hmm, this is my resume built based on Nextjs. what else?',
  openGraph: {
    images:'https://assets-global.website-files.com/61ddd0b42c51f89b7de1e910/6476a1fb5d58a4ab0984f50e_64243f76da8d9a66c5764155_ferhat-deniz-fors-e1qoosfnAvA-unsplash.jpeg',
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
