import { Eyebrow } from "@/components/eyebrow"

const engagements = [
  {
    title: "Hourly",
    detail: "For ongoing product work, technical leadership, refactoring, and incremental feature delivery.",
    terms: "Time-based work",
  },
  {
    title: "Fixed scope",
    detail: "For defined MVPs, service integrations, dashboards, landing pages, and contained product milestones.",
    terms: "Defined outcome",
  },
  {
    title: "Retainer",
    detail: "For teams that need steady technical ownership across roadmap planning, delivery, and support.",
    terms: "Monthly capacity",
  },
]

export function Engagements() {
  return (
    <section id="engagements" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <div className="max-w-2xl mb-16">
            <Eyebrow className="mb-5">Engagement models</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Flexible enough for the stage you are in.
            </h2>
          </div>

          <div className="border-y border-border/50">
            {engagements.map((engagement) => (
              <div
                key={engagement.title}
                className="grid gap-4 border-b border-border/50 py-8 last:border-b-0 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold">{engagement.title}</h3>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-brand-purple">
                    {engagement.terms}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed md:col-span-7">{engagement.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
