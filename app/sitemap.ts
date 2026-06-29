import type { MetadataRoute } from "next"
import { caseStudies, services, siteConfig } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]
}
