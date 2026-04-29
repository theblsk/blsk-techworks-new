import type { Metadata, Viewport } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PWARegister } from "@/components/pwa-register"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#080b16" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "BLSK Labs | Custom Software Development Company",
  description: "BLSK Labs designs and builds custom web applications, mobile apps, SaaS platforms, APIs, and backend systems for growing businesses.",
  keywords: [
    "custom software development",
    "software development company",
    "web application development",
    "mobile app development",
    "SaaS development",
    "backend development",
    "API development",
    "BLSK Labs",
  ],
  applicationName: "BLSK Labs",
  authors: [{ name: "BLSK Labs" }],
  creator: "BLSK Labs",
  publisher: "BLSK Labs",
  category: "Software Development",
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://blsk.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BLSK Labs | Custom Software Development Company",
    description: "Custom web, mobile, SaaS, API, and backend development for businesses that need reliable software built for scale.",
    url: 'https://blsk.dev',
    siteName: 'BLSK Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "BLSK Labs",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BLSK Labs | Custom Software Development Company",
    description: "Custom web, mobile, SaaS, API, and backend development for growing businesses.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4228c9"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#080b16" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PWARegister />
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
