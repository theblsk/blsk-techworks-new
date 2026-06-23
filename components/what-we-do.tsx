import Link from "next/link"
import { Eyebrow } from "@/components/eyebrow"
import { services } from "@/lib/site-content"

export function WhatWeDo() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <div className="max-w-2xl mb-16">
            <Eyebrow className="mb-5">What we do</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              The work that turns a product idea into dependable software.
            </h2>
          </div>

          <div className="grid gap-px md:grid-cols-2 bg-border/50 border border-border/50 rounded-lg overflow-hidden">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group bg-background p-8 md:p-10"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
