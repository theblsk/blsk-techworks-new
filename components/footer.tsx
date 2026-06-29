import Link from "next/link"
import Image from "next/image"
import { services, siteConfig } from "@/lib/site-content"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="BLSK Labs logo"
              width={24}
              height={24}
              className="shrink-0"
            />
            <Link href="/" className="text-lg font-semibold tracking-tight">
              BLSK Labs
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/#work" className="hover:text-foreground transition-colors">Work</Link>
            <Link href="/#process" className="hover:text-foreground transition-colors">Process</Link>
            <a href={siteConfig.bookingUrl} className="hover:text-foreground transition-colors">Book a call</a>
          </div>
        </div>
        <div className="mt-10 grid gap-3 border-t border-border/30 pt-8 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-foreground transition-colors">
              {service.title}
            </Link>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} BLSK Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
