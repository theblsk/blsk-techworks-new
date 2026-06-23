import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { Eyebrow } from "@/components/eyebrow"
import { siteConfig } from "@/lib/site-content"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <Eyebrow className="mb-5">Get in touch</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
              Book a discovery call.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Use the call to explain what you are building, where the product is stuck, or what kind
              of engineering help you need. We will discuss the next practical step and say so directly
              if the work is not a fit.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Available for remote engagements worldwide</p>
              <p>Hourly, fixed-scope, and retainer work available</p>
            </div>
          </div>

          <div>
            <div className="border-y border-border/50 py-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Best first step</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">15- or 30-minute introductory call</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Bring the goal, current state, timeline, and any technical constraints. We will use
                    the conversation to understand the problem before recommending an engagement.
                  </p>
                </div>
                <Button asChild size="lg" className="h-12 w-full">
                  <a href={siteConfig.bookingUrl}>
                    Book a call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
