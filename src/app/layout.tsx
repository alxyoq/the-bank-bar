/* src/app/layout.tsx */
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Bank Bar | Gloucester City, NJ',
  description:
    'Drinks, upscale bar eats, and regular live entertainment in a former bank building with a pool table.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'The Bank Bar',
    description:
      'Drinks, upscale bar eats, and regular live entertainment in a former bank building with a pool table.',
    url: 'https://thebankbarnj.com',
    images: ['/logo1.png'],
    siteName: 'The Bank Bar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bank Bar',
    description:
      'Drinks, upscale bar eats, and regular live entertainment in a former bank building with a pool table.',
    images: ['/logo1.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* fallback for very old browsers */}
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body
        className="antialiased bg-black text-white font-poppins"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}