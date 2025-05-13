/*  src/app/layout.tsx  */
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Bank Bar | Woodbury, NJ',
  description:
    'A charming train-themed cafe serving delicious breakfast and lunch in Woodbury, New Jersey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="image_src" href="/images/logo/woodbury-station-cafe-logo.png" />
        <title>The Bank Bar | Woodbury, NJ</title>
      </head>

      <body className="antialiased bg-black text-white font-poppins" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
