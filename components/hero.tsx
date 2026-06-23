import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-content"

const disciplines = ["Web", "Mobile", "SaaS", "APIs", "Backend"]

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-144 w-144 -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Independent software delivery
            </span>
          </div>

          <h1 className="mt-8 text-4xl leading-[1.04] tracking-tight animate-fade-in-delay sm:text-5xl md:text-6xl lg:text-7xl">
            Software that holds up{" "}
            <em className="italic text-primary">after launch.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-in-delay-2 md:text-xl">
            BLSK Labs builds and improves web applications, mobile apps, SaaS products, APIs, and
            backend systems. AI accelerates delivery; engineering judgement, review, and production
            responsibility stay with us.
          </p>

          <div className="mt-10 flex flex-col gap-4 animate-fade-in-delay-3 sm:flex-row">
            <Button size="lg" asChild className="h-12 px-8">
              <a href={siteConfig.bookingUrl} className="inline-flex items-center justify-center">
                Book a discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8">
              <a href="#work" className="inline-flex items-center justify-center">
                See our work
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/60 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground animate-fade-in-delay-3">
            {disciplines.map((discipline, index) => (
              <span key={discipline} className="flex items-center gap-4">
                {index > 0 && <span className="text-border" aria-hidden="true">/</span>}
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
