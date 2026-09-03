import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/vexu", changeFrequency: "monthly", priority: 0.9 },
  { path: "/combat", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sponsors", changeFrequency: "monthly", priority: 0.9 },
  { path: "/team", changeFrequency: "monthly", priority: 0.8 },
  { path: "/outreach", changeFrequency: "monthly", priority: 0.8 },
  { path: "/marketing", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
