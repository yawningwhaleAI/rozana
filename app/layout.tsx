import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rozana.example"),
  title: site.metaTitle,
  description: site.metaDescription,
  keywords: [
    "Rozana",
    "kitchen towels",
    "facial tissues",
    "paper napkins",
    "toilet rolls",
    "air fryer liners",
    "India paper essentials",
    "Delhi NCR",
  ],
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rozana — Everyday, better." }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF3E3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
