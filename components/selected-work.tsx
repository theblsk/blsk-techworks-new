import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Eyebrow } from "@/components/eyebrow"
import { caseStudies } from "@/lib/site-content"

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <div className="max-w-2xl mb-16">
            <Eyebrow className="mb-5">Selected work</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Representative work from BLSK Labs and prior technical leadership roles.
            </h2>
          </div>

          <div className="space-y-0 border-t border-border/50">
            {caseStudies.map((project) => (
              <div
                key={project.slug}
                className="group border-b border-border/50 py-8 md:py-10"
              >
                <Link href={`/case-studies/${project.slug}`} className="grid md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.label}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-foreground transition-colors mt-1 shrink-0" />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm font-medium mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
