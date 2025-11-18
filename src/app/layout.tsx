import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: "--font-oswald",
});
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Aggie Robotics | 2025-2026",
  description: "The official website of Aggie Robotics at Texas A&M University!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/square/Black.png",
        href: "/logos/square/Black.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/square/White.png",
        href: "/logos/square/White.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${oswald.className} antialiased bg-white text-black`}>
        <Navbar />
        <div className="flex flex-col min-h-screen pt-18">
          <main className="grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}