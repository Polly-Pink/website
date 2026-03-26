import type { Metadata } from "next";
import { Navbar } from "#components/navbar/Navbar";
import { fontBody } from "#lib/fonts";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Polly",
  description: "Polly Community Memecoin",
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
      </body>
    </html>
  );
}
