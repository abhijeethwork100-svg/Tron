import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prospera Group | Purpose. Progress. Prosper.',
  description: 'A Modern Luxury Conglomerate Shaping The Future Of Real Estate, Wellness, And Lifestyle In India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
