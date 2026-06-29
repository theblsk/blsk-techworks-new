import type { Metadata, Viewport } from "next"
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PWARegister } from "@/components/pwa-register"
import { UmamiAnalytics } from "@/components/umami-analytics"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from "@/lib/site-content"
import type React from "react"

/** Hex values mirror --viewport-theme-color-* in public/brand-tokens.css */
const viewportThemeColors = {
  light: "#f9fafb",
  dark: "#0f1115",
} as const

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  fallback: ["system-ui", "arial"],
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  fallback: ["ui-monospace", "monospace"],
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  fallback: ["Georgia", "serif"],
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: viewportThemeColors.dark },
    { media: "(prefers-color-scheme: dark)", color: viewportThemeColors.dark },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const defaultTitle = `${siteConfig.name} | ${siteConfig.tagline}`

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Software Development",
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
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
    <html
      lang="en"
      className={`scroll-smooth ${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PWARegister />
          {children}
          <Toaster />
          <UmamiAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
