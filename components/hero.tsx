"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight min-h-[3em] md:min-h-[2em] opacity-0 animate-fade-in">
            I build solutions for the web and mobile.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground min-h-[4em] md:min-h-[3em] opacity-0 animate-fade-in-delay">
            Senior Software Engineer specialized in building exceptional web and mobile applications. Turning ideas into reality
            through clean code and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-h-[88px] sm:min-h-[44px] opacity-0 animate-fade-in-delay-2">
            <Button size="lg" asChild className="w-full sm:w-[200px] h-11">
              <a href="#contact" className="inline-flex items-center justify-center">
                Let&apos;s work together
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-[200px] h-11">
              <a href="#projects" className="inline-flex items-center justify-center">
                View my work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

