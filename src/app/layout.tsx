import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/features/legal/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madevix — Unabhängiges digitales Studio",
    template: "%s | Madevix",
  },
  description: "Weniger Chaos. Mehr Wirkung. Individuell entwickelte Websites und digitale Lösungen für moderne Unternehmen.",
  metadataBase: new URL("https://madevix.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Madevix — Unabhängiges digitales Studio",
    description: "Weniger Chaos. Mehr Wirkung. Individuell entwickelte Websites und digitale Lösungen für moderne Unternehmen.",
    url: "https://madevix.com",
    siteName: "Madevix",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Madevix — Unabhängiges digitales Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madevix — Unabhängiges digitales Studio",
    description: "Weniger Chaos. Mehr Wirkung. Individuell entwickelte Websites und digitale Lösungen für moderne Unternehmen.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#222222] selection:bg-[#0F62FE] selection:text-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}