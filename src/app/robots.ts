import type { MetadataRoute } from "next";

import { env } from "~/env";

export default function Robots(): MetadataRoute.Robots {
  const url = env.NEXT_PUBLIC_SERVER_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${url}sitemap.xml`,
  };
}
