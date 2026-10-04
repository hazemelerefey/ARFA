import type { MetadataRoute } from "next";
import { articles, projects } from "@/content/site";
import { SITE_URL } from "@/lib";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/projects", "/lab", "/contact", "/privacy-policy", "/terms-of-service", "/disclaimer", ...projects.map((p) => `/projects/${p.slug}`), ...articles.map((a) => `/lab/${a.slug}`)];
  return paths.map((p) => ({ url: `${SITE_URL}${p}` }));
}
