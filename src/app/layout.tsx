import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Woodbury Station Cafe | Woodbury Heights, NJ",
  description:
    "A charming train-themed cafe serving delicious breakfast and lunch in Woodbury Heights, New Jersey.",
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
          content="Woodbury Station Cafe | Woodbury Heights, NJ"
        />
        <meta
          property="og:description"
          content="A charming train-themed cafe serving delicious breakfast and lunch in Woodbury Heights."
        />
        <meta
          property="og:image"
          content="/images/logo/link-preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Woodbury Station Cafe Logo" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://woodburystationcafe.com/" />
        <meta
          name="twitter:title"
          content="Woodbury Station Cafe | Woodbury Heights, NJ"
        />
        <meta
          name="twitter:description"
          content="A charming train-themed cafe serving breakfast, brunch, and lunch."
        />
        <meta
          name="twitter:image"
          content="/images/logo/woodbury-station-cafe-logo.png"
        />

        {/* Single 512x512 Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logo/512x512.png?v=2"
        />

        <title>Woodbury Station Cafe | Woodbury Heights, NJ</title>
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
