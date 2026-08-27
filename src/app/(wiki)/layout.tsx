import "@/src/app/globals.css";
import Navbar from "@/src/app/components/wiki/Navbar";
import Footer from "@/src/app/components/Footer";

import type { Metadata } from "next";
import { siteFontsClassName } from "@/src/lib/fonts";
import { SITE_URL } from "@/src/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wiki | Aggie Robotics",
  description: "Member wiki for Aggie Robotics at Texas A&M University.",
  robots: { index: false, follow: false },
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

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={siteFontsClassName}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}