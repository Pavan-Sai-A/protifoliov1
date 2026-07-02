import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pavan Sai Ande — Front-End Engineer',
  description: 'Front-End Engineer · React · Next.js · TypeScript · AI/LLMs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
