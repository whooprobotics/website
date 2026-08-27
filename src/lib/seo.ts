import type { Metadata } from "next";

export const SITE_URL = "https://aggierobotics.com";
export const SITE_NAME = "Aggie Robotics";
export const SITE_TAGLINE = "Aggie Robotics at Texas A&M University";
export const SITE_DESCRIPTION =
  "Aggie Robotics is a student organization at Texas A&M University competing in VEX U and combat robotics, and running STEAM outreach across Bryan/College Station.";

export const CONTACT_EMAIL = "aggieroboticstx@gmail.com";

export const SOCIAL_LINKS = [
  "https://www.instagram.com/aggie.robotics/",
  "https://www.youtube.com/@AggieRobotics",
];

const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Aggie Robotics at Texas A&M University",
};

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/vexu". Used for the canonical URL. */
  path: string;
  keywords?: string[];
  image?: { url: string; width: number; height: number; alt: string };
  /** Skip the "| Aggie Robotics" suffix from the layout title template. */
  absoluteTitle?: boolean;
};

/**
 * Builds per-page metadata so every route ships a canonical URL and its own
 * Open Graph / Twitter card instead of inheriting the site-wide defaults.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = OG_IMAGE,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: socialTitle,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export const DEFAULT_OG_IMAGE = OG_IMAGE;
