import "@/src/app/globals.css";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

import type { Metadata } from "next";
import { siteFontsClassName } from "@/src/lib/fonts";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/src/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Texas A&M University`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Aggie Robotics",
    "Texas A&M robotics",
    "Texas A&M University",
    "VEX U",
    "VEXU robotics",
    "combat robotics",
    "Aggie Combat Robotics",
    "ACR",
    "College Station",
    "student organization",
    "STEAM outreach",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
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
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/logos/square/Maroon.png"],
  },
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