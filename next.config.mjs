import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vdbnvywxfuxqgcsjaewm.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? [
                  "default-src 'self'",
                  "connect-src 'self' https://*.emailjs.com https://api.emailjs.com",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.emailjs.com https://cdn.jsdelivr.net",
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: https://vdbnvywxfuxqgcsjaewm.supabase.co",
                  "frame-ancestors 'none'",
                  "form-action 'self'",
                  "base-uri 'self'"
                ].join('; ')
              : [
                  "default-src 'self'",
                  "connect-src 'self' https://*.emailjs.com https://api.emailjs.com",
                  "script-src 'self' 'unsafe-inline' https://*.emailjs.com https://cdn.jsdelivr.net",
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: https://vdbnvywxfuxqgcsjaewm.supabase.co",
                  "frame-ancestors 'none'",
                  "form-action 'self'",
                  "base-uri 'self'"
                ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
};

const config = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(nextConfig)

export default config;
