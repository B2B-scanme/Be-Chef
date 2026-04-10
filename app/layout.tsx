import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cairo, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Be Chef - Restaurant Menu',
  description: 'Découvrez notre menu et commandez via WhatsApp | اكتشف قائمتنا واطلب عبر واتساب',
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B0000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cairo.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
