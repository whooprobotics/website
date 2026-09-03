export type TierId = "diamond" | "platinum" | "gold" | "silver" | "bronze";

export type Sponsor = {
  id: string;
  name: string;
  tier: TierId;
  href?: string;
  /** Logo file in /public/sponsors. Sponsors without one fall back to a wordmark tile. */
  logo?: string;
  /** Logo aspect ratio, used to keep the wall's optical sizing even. */
  wide?: boolean;
};

export type Tier = {
  id: TierId;
  label: string;
  /** Annual giving range from the sponsorship packet. */
  range: string;
  /** Tiers that include a thank-you meeting with our faculty advisor. */
  meeting?: boolean;
  /** Tailwind classes for the tile grid, so higher tiers read larger. */
  grid: string;
  height: string;
  /** Type size for sponsors that fall back to a wordmark tile. */
  wordmark: string;
  accent: string;
};

/** A benefit is included, absent, or included at a called-out level. */
export type BenefitLevel = boolean | "Present" | "Prominent";

export type Benefit = {
  label: string;
  levels: Record<TierId, BenefitLevel>;
};

export const tiers: Tier[] = [
  {
    id: "diamond",
    label: "DIAMOND",
    range: "$7,500+",
    meeting: true,
    grid: "grid-cols-1 sm:grid-cols-3",
    height: "h-40",
    wordmark: "text-2xl",
    accent: "bg-sky-300",
  },
  {
    id: "platinum",
    label: "PLATINUM",
    range: "$4,000 – $7,499",
    meeting: true,
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    height: "h-32",
    wordmark: "text-xl",
    accent: "bg-slate-300",
  },
  {
    id: "gold",
    label: "GOLD",
    range: "$2,000 – $3,999",
    meeting: true,
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    height: "h-28",
    wordmark: "text-base",
    accent: "bg-amber-300",
  },
  {
    id: "silver",
    label: "SILVER",
    range: "$1,000 – $1,999",
    grid: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6",
    height: "h-24",
    wordmark: "text-sm",
    accent: "bg-zinc-300",
  },
  {
    id: "bronze",
    label: "BRONZE",
    range: "$250 – $999",
    grid: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-6",
    height: "h-24",
    wordmark: "text-sm",
    accent: "bg-amber-700",
  },
];

export const sponsors: Sponsor[] = [
  { id: "williams", name: "Williams", tier: "diamond", href: "https://www.williams.com", logo: "/sponsors/williams.svg" },
  {
    id: "phillips66",
    name: "Phillips 66",
    tier: "diamond",
    href: "https://www.phillips66.com",
    logo: "/sponsors/phillips66.svg",
  },
  {
    id: "axle-box",
    name: "Axle Box",
    tier: "diamond",
    href: "https://www.axle-box.com",
    logo: "/sponsors/axle-box.svg",
    wide: true,
  },
  {
    id: "l3harris",
    name: "L3Harris",
    tier: "platinum",
    href: "https://www.l3harris.com",
    logo: "/sponsors/l3harris.svg",
    wide: true,
  },
  {
    id: "sec",
    name: "Student Engineers' Council",
    tier: "platinum",
    href: "https://home.sec.tamu.edu",
    logo: "/sponsors/sec.png",
  },
  {
    id: "good-bull",
    name: "The Good Bull Fund",
    tier: "platinum",
    href: "https://getinvolved.tamu.edu/org/goodbull",
  },
  {
    id: "onshape",
    name: "Onshape",
    tier: "platinum",
    href: "https://www.onshape.com",
    logo: "/sponsors/onshape.svg",
    wide: true,
  },
  { id: "notion", name: "Notion", tier: "platinum", href: "https://www.notion.com", logo: "/sponsors/notion.svg" },

  { id: "rtx", name: "RTX", tier: "gold", href: "https://www.rtx.com", logo: "/sponsors/rtx.svg", wide: true },
  { id: "cat", name: "Caterpillar", tier: "gold", href: "https://www.caterpillar.com", logo: "/sponsors/cat.svg", wide: true },
  { id: "eaton", name: "Eaton", tier: "gold", href: "https://www.eaton.com", logo: "/sponsors/eaton.svg", wide: true },
  {
    id: "tamu-engineering",
    name: "Texas A&M University Engineering",
    tier: "gold",
    href: "https://engineering.tamu.edu",
    logo: "/sponsors/tamu-engineering.svg",
    wide: true,
  },
  {
    id: "dfw-urethane",
    name: "DFW Urethane",
    tier: "gold",
    href: "https://dfwurethane.com",
    logo: "/sponsors/dfw-urethane.png",
    wide: true,
  },
  {
    id: "additive",
    name: "Additive at Scale",
    tier: "gold",
    href: "https://www.additiveatscale.com",
    logo: "/sponsors/additive.png",
    wide: true,
  },
  {
    id: "texas-regional",
    name: "Texas Regional Health & Wellness",
    tier: "gold",
    href: "https://mytexasregional.com",
    logo: "/sponsors/texas-regional.png",
    wide: true,
  },
  {
    id: "fuel-cell-store",
    name: "Fuel Cell Store",
    tier: "gold",
    href: "https://www.fuelcellstore.com",
    logo: "/sponsors/fuel-cell-store.png",
    wide: true,
  },
  {
    id: "general-matter",
    name: "General Matter",
    tier: "gold",
    href: "https://generalmatter.com",
    logo: "/sponsors/general-matter.svg",
    wide: true,
  },

  {
    id: "tc-energy",
    name: "TC Energy",
    tier: "silver",
    href: "https://www.tcenergy.com",
    logo: "/sponsors/tc-energy.svg",
    wide: true,
  },
  { id: "safetech", name: "SafeTech", tier: "silver", href: "https://www.linkedin.com/company/makesafetech" },
  {
    id: "polymaker",
    name: "Polymaker",
    tier: "silver",
    href: "https://www.polymaker.com",
    logo: "/sponsors/polymaker.png",
    wide: true,
  },

  {
    id: "healing-provisions",
    name: "Healing Provisions",
    tier: "bronze",
    href: "https://healingprovisions.net",
    logo: "/sponsors/healing-provisions.png",
    wide: true,
  },
  {
    id: "bleyl",
    name: "Bleyl Engineering",
    tier: "bronze",
    href: "https://bleylengineering.com",
    logo: "/sponsors/bleyl.svg",
    wide: true,
  },
];

/** Ordered smallest to largest, matching the table in the sponsorship packet. */
export const benefits: Benefit[] = [
  {
    label: "Logo on website",
    levels: { bronze: true, silver: true, gold: true, platinum: true, diamond: true },
  },
  {
    label: "Logo in reveal & recap videos",
    levels: { bronze: true, silver: true, gold: true, platinum: true, diamond: "Prominent" },
  },
  {
    label: "Logo on banner",
    levels: { bronze: false, silver: true, gold: true, platinum: true, diamond: true },
  },
  {
    label: "Logo on t-shirts",
    levels: { bronze: false, silver: true, gold: true, platinum: true, diamond: true },
  },
  {
    label: "Logo on robots",
    levels: { bronze: false, silver: false, gold: true, platinum: true, diamond: true },
  },
  {
    label: "Logo on competition fields",
    levels: { bronze: false, silver: false, gold: false, platinum: "Present", diamond: "Prominent" },
  },
  {
    label: "Member resume book",
    levels: { bronze: false, silver: false, gold: false, platinum: true, diamond: true },
  },
  {
    label: "Industry nights",
    levels: { bronze: false, silver: false, gold: false, platinum: false, diamond: true },
  },
];

export const DONATE_URL = "https://www.txamfoundation.com/give.aspx";
export const GIFT_DESIGNATION = "Student Organization Gifts";
export const GIFT_NOTES = "Aggie Robotics";
export const CHECK_PAYABLE = "Aggie Robotics";
export const CHECK_ADDRESS = [
  "Aggie Robotics",
  "Student Org Mailbox #799",
  "235 Koldus Student Services Building",
  "Joe Routt Blvd",
  "College Station, TX 77843",
];
export const SPONSOR_EMAIL = "sponsorships@aggierobotics.com";
export const ADVISOR_NAME = "Dr. Isuru Godage";
export const ADVISOR_EMAIL = "igodage@tamu.edu";
export const PACKET_URL = "/aggie-robotics-sponsorship-packet-2026-2027.pdf";
