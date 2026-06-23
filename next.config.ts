import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vdbnvywxfuxqgcsjaewm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/sw.js",
      headers: [
        {
          key: "Content-Type",
          value: "application/javascript; charset=utf-8",
        },
        {
          key: "Cache-Control",
          value: "no-cache, no-store, must-revalidate",
        },
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'self'",
        },
      ],
    },
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: blob: https:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://api.emailjs.com https://*.vercel-insights.com https://va.vercel-scripts.com",
            "frame-src 'self' https://cal.com https://*.cal.com https://calendly.com https://*.calendly.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            "upgrade-insecure-requests",
          ].join("; "),
        },
        ...(process.env.NODE_ENV !== "production"
          ? [
              {
                // A previous production worker can otherwise keep serving stale
                // Turbopack chunks on localhost after a code change.
                key: "Clear-Site-Data",
                value: '"cache", "storage"',
              },
              {
                key: "Cache-Control",
                value: "no-store",
              },
            ]
          : []),
      ],
    },
  ],
}

export default nextConfig
