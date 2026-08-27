import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/src/lib/seo";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Aggie Robotics at Texas A&M", "Aggie Combat Robotics", "ACR"],
      url: SITE_URL,
      logo: `${SITE_URL}/logos/square/Maroon.png`,
      image: `${SITE_URL}/og.jpg`,
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      sameAs: SOCIAL_LINKS,
      sport: "Robotics",
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "Texas A&M University",
        url: "https://www.tamu.edu/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "College Station",
        addressRegion: "TX",
        addressCountry: "US",
      },
      subOrganization: [
        {
          "@type": "SportsTeam",
          name: "WHOOP",
          description: "The VEX U competition team of Aggie Robotics.",
          url: `${SITE_URL}/vexu`,
          sport: "VEX U Robotics Competition",
        },
        {
          "@type": "SportsTeam",
          name: "Aggie Combat Robotics",
          alternateName: "ACR",
          description:
            "The combat robotics program of Aggie Robotics, competing in 1 lb, 3 lb, and 12 lb classes.",
          url: `${SITE_URL}/combat`,
          sport: "Combat Robotics",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function OrganizationJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
