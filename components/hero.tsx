"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm tracking-widest uppercase text-primary/70 opacity-0 animate-fade-in">
            Custom Software Development Company
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight opacity-0 animate-fade-in-delay">
            Custom software built for business growth.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in-delay-2">
            BLSK Labs designs and develops web applications, mobile apps, SaaS platforms, APIs,
            and backend systems for businesses that need reliable software delivered end to end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-3">
            <Button size="lg" asChild className="h-12 px-8">
              <a href="#contact" className="inline-flex items-center justify-center">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8">
              <a href="#work" className="inline-flex items-center justify-center">
                See our work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
