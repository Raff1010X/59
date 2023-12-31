import type { Metadata } from 'next'
import { Viewport } from 'next'
import { fontsVariables, galanoNormal } from '@/utils/fontLoader'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  manifest: '/manifest.json',
  icons: {
    // icons moved to public folder from app folder and deleted from here
    icon: [
      { url: '/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
      { url: '/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/android-icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon-precomposed.png',
    },
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-square70x70logo': 'ms-icon-70x70.png',
    'msapplication-square150x150logo': 'ms-icon-150x150.png',
    'msapplication-square310x310logo': 'ms-icon-310x310.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${galanoNormal.className} ${fontsVariables}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
