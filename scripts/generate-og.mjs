// Regenerates the social share card (public/og.jpg) and the Apple touch icon.
// Run with `npm run generate-og` after swapping the background photo or logo.

import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const WIDTH = 1200;
const HEIGHT = 630;
const MAROON = "#5C0A11";

const background = path.join(publicDir, "team", "org-25-26.jpg");
const lion = path.join(publicDir, "logos", "square", "White.png");

const scrim = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="wash" x1="0" y1="0" x2="1" y2="0.4">
      <stop offset="0%" stop-color="${MAROON}" stop-opacity="0.97" />
      <stop offset="52%" stop-color="${MAROON}" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#210306" stop-opacity="0.72" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#wash)" />
  <rect width="${WIDTH}" height="14" fill="#FFFFFF" fill-opacity="0.9" />
  <rect y="${HEIGHT - 14}" width="${WIDTH}" height="14" fill="#FFFFFF" fill-opacity="0.9" />
</svg>
`);

const wordmark = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <g font-family="DIN Condensed, Oswald, Impact, Helvetica Neue, sans-serif" fill="#FFFFFF">
    <text x="430" y="270" font-size="112" font-weight="700" letter-spacing="2">AGGIE</text>
    <text x="430" y="382" font-size="112" font-weight="700" letter-spacing="2">ROBOTICS</text>
    <text x="434" y="452" font-size="40" letter-spacing="7" fill-opacity="0.85">TEXAS A&amp;M UNIVERSITY</text>
  </g>
  <rect x="430" y="404" width="118" height="5" fill="#FFFFFF" fill-opacity="0.75" />
</svg>
`);

async function buildOgImage() {
  const lionLayer = await sharp(lion)
    .resize({ width: 320, height: 320, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(background)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "top" })
    .composite([
      { input: scrim, top: 0, left: 0 },
      { input: lionLayer, top: 155, left: 80 },
      { input: wordmark, top: 0, left: 0 },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(publicDir, "og.jpg"));
}

async function buildAppleIcon() {
  await sharp(path.join(publicDir, "logos", "square", "White.png"))
    .resize(148, 148, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 16, bottom: 16, left: 16, right: 16, background: MAROON })
    .flatten({ background: MAROON })
    .png()
    .toFile(path.join(publicDir, "apple-icon.png"));
}

await buildOgImage();
await buildAppleIcon();
console.log("Wrote public/og.jpg and public/apple-icon.png");
