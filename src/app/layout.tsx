import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Minescale",
  description: "Effortless Web Scraping with a Single API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen transition-colors bg-background font-roobert antialiased"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
