import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'MEGOGO - Фільми, серіали, мультфільми онлайн',
  description: 'Дивіться фільми, серіали, мультфільми, шоу та спорт онлайн на MEGOGO. Більше 50 000 годин контенту в HD якості.',
  keywords: 'фільми онлайн, серіали, мультфільми, шоу, спорт, MEGOGO',
  openGraph: {
    title: 'MEGOGO - Фільми, серіали, мультфільми онлайн',
    description: 'Дивіться фільми, серіали, мультфільми, шоу та спорт онлайн на MEGOGO',
    type: 'website',
    locale: 'uk_UA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}