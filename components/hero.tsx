"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in">
          I build solutions for the web and mobile.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in-delay">
          Software engineer specializing in building exceptional web and mobile applications. Turning ideas into reality
          through clean code and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-2">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="#contact">
              Let&apos;s work together
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
            <a href="#projects">View my work</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

