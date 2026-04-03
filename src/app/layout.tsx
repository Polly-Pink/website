import type { Metadata } from "next";
import { Footer } from "#components/footer";
import { Navbar } from "#components/navbar";
import { fontBody } from "#lib/fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Polly — Pudgy Penguins Character & Companion of Pax",
  description:
    "Meet Polly, the beloved wife of Pax and official character from Pudgy Penguins. Discover her story, explore artwork, and join the Polly Penguin community!",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "Polly — Pudgy Penguins",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Polly — Pudgy Penguins Character & Companion of Pax",
    description:
      "Explore the world of Polly — a charming character in the Pudgy Penguins universe and Pax’s beloved companion.",
    url: "https://polly.pink",
    siteName: "Polly — Pudgy Penguins",
    images: [
      {
        url: "https://polly.pink/og-image.png",
        width: 1200,
        height: 630,
        alt: "Polly the Penguin — Pudgy Penguins Character",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Polly — Pudgy Penguins Character",
    description:
      "Official website of Polly, Pax’s beloved companion in the Pudgy Penguins universe.",
    site: "@PollyXYZ",
    creator: "@PollyXYZ",
    images: ["https://polly.pink/og-image.png"],
  },

  authors: [{ name: "Polly Team" }],
  keywords: [
    "Polly",
    "Pax",
    "Pudgy Penguins",
    "NFT",
    "Web3",
    "Pengu",
    "Polly Penguin",
    "Penguin NFT",
    "Companion NFT",
    "Polly On Abstract",
    "Cute NFT Character",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontBody.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
