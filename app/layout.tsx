// app/layout.tsx
// Root layout — fonts, metadata, sticky header, footer, AuthProvider.

import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/auth/AuthProvider";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Moderate Populist — Where Americans Find Common Ground",
    template: "%s | The Moderate Populist",
  },
  description:
    "A reader-supported civic almanac. Independent. Non-partisan. Evidence-based. Find out where you actually agree with your neighbors — and where you don't.",
  keywords: [
    "moderate politics", "bipartisan", "common ground", "civic dialogue",
    "talking points", "non-partisan", "American politics",
  ],
  authors: [{ name: "The Moderate Populist" }],
  creator: "The Moderate Populist",
  metadataBase: new URL("https://www.moderatepopulist.org"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.moderatepopulist.org",
    siteName: "The Moderate Populist",
    title: "The Moderate Populist — Where Americans Find Common Ground",
    description:
      "Eight questions, no login. Find out where you actually agree with your neighbors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Moderate Populist",
    description:
      "A civic almanac for Americans who refuse to be caricatured by their politics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${funnelSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="mp">
            <div className="political-spectrum" />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
