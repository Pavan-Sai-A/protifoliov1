import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pavan Sai Ande — Front-End Engineer',
  description: 'Front-End Engineer specialising in React, Next.js, TypeScript and AI/LLM integration.',
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230f172a'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,system-ui,sans-serif' font-weight='800' font-size='14' fill='%230d9488'>PS</text></svg>`,
        type: 'image/svg+xml',
      },
    ],
  },
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
