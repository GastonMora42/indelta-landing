import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Indelta oficial',
  description: 'Pagina oficial de Indelta',
  generator: 'Jett Labs',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}