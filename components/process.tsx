"use client"

import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: true })

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <MotionDiv variants={item} className="max-w-2xl mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">How we work</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A structured process from strategy to launch.
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step) => (
              <MotionDiv
                key={step.number}
                variants={item}
                className="group"
              >
                <div className="flex gap-6">
                  <span className="text-4xl font-semibold text-border/80 group-hover:text-foreground/20 transition-colors flex-shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
