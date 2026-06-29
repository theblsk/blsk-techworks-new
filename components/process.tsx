import { Eyebrow } from "@/components/eyebrow"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, users, technical constraints, and operating model. The outcome is a clear scope, delivery plan, timeline, and definition of success.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We define the system architecture before development begins, including data models, API contracts, integrations, infrastructure decisions, and security requirements.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build in focused iterations with regular demos, clear progress updates, and working software you can review before launch-critical decisions are locked in.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "We handle production deployment, monitoring, documentation, and post-launch support so your team can operate the product with confidence.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div>
          <div className="max-w-2xl mb-16">
            <Eyebrow className="mb-5">How we work</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              A clear route from the first conversation to production.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group"
              >
                <div className="flex gap-6">
                  <span className="font-mono text-3xl font-medium text-primary/70 group-hover:text-primary transition-colors shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
