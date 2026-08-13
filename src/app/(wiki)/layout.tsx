import "@/src/app/globals.css";
import Navbar from "@/src/app/components/wiki/Navbar";
import Footer from "@/src/app/components/Footer";

import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";

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

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}