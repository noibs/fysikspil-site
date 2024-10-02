import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Naturfag med Æliot",
  description: "Naturfag med Æliot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="da">
        <head>
          <Script
            src="https://kit.fontawesome.com/e4cef1fffb.js"
            crossOrigin="anonymous"
          />
        </head>
        <body className={inter.variable}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
