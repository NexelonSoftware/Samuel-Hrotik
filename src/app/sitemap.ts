import type { MetadataRoute } from "next";

import { env } from "~/env";

/**
 * Generates a sitemap for the SplitWallet application
 * Including both static and dynamic routes with proper priorities and change frequencies
 */
export default function Sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_SERVER_URL;
  const currentDate = new Date().toISOString();
  const sitemap: MetadataRoute.Sitemap = [];

  // Add root and locale roots with high priority
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });

  return sitemap;
}
