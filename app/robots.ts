import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-content"

function getHost(value: string | undefined): string | null {
  if (!value) {
    return null
  }

  try {
    return new URL(value.includes("://") ? value : `https://${value}`).hostname
  } catch {
    return null
  }
}

export default function robots(): MetadataRoute.Robots {
  const canonicalHost = getHost(siteConfig.url)
  const deploymentHost =
    getHost(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    getHost(process.env.VERCEL_URL) ||
    getHost(process.env.RAILWAY_PUBLIC_DOMAIN) ||
    getHost(process.env.NEXT_PUBLIC_SITE_URL)
  const isCanonicalDeployment = Boolean(canonicalHost && deploymentHost === canonicalHost)

  if (!isCanonicalDeployment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
