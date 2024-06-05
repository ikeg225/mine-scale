import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
  title: "Minescale",
  description: "Effortless Web Scraping with a Single API",
  openGraph: {
    title: "Minescale",
    description: "Effortless Web Scraping with a Single API",
    images: [
      {
        url: "https://minescale.net/cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    url: "https://minescale.net",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-roobert antialiased")}>
        <GoogleAnalytics />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
