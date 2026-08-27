import "@/src/app/globals.css";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

import type { Metadata } from "next";
import { siteFontsClassName } from "@/src/lib/fonts";

export const metadata: Metadata = {
  title: "Aggie Robotics | 2026-2027",
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
      <body className={siteFontsClassName}>
        <Navbar />
        <div className="flex flex-col min-h-screen pt-18">
          <main className="grow overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}