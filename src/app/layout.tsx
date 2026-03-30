import type { Metadata } from "next";
import { Footer } from "#components/footer";
import { Navbar } from "#components/navbar";
import { fontBody } from "#lib/fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Polly",
  applicationName: "Polly",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
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
