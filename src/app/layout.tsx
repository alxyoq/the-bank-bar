import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Woodbury Station Cafe | Woodbury, NJ",
  description:
    "A charming train-themed cafe serving delicious breakfast and lunch in Woodbury, New Jersey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="image_src" href="/images/logo/woodbury-station-cafe-logo.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://woodburystationcafe.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Woodbury Station Cafe | Woodbury, NJ"
        />
        <meta
          property="og:description"
          content="A charming train-themed cafe serving delicious breakfast and lunch in Woodbury."
        />
        <meta property="og:image" content="/images/logo/link-preview.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content="Woodbury Station Cafe Logo" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://woodburystationcafe.com/" />
        <meta
          name="twitter:title"
          content="Woodbury Station Cafe | Woodbury, NJ"
        />
        <meta
          name="twitter:description"
          content="A charming train-themed cafe serving breakfast, brunch, and lunch."
        />
        <meta
          name="twitter:image"
          content="/images/logo/woodbury-station-cafe-logo.png"
        />

        {/* Favicon for desktop browser (ONLY show 512x512) */}
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logo/512x512.png?v=2"
        />

        {/* Mobile / Device Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logo/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/images/logo/site.webmanifest"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/logo/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logo/android-chrome-512x512.png"
        />

        <title>Woodbury Station Cafe | Woodbury, NJ</title>
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
