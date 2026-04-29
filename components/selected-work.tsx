"use client"

import dynamic from "next/dynamic"
import { ArrowUpRight } from "lucide-react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: true })

const projects = [
  {
    client: "Healthcare Platform",
    scope: "Web Application / Backend Systems",
    description:
      "Delivered a full-stack telemedicine platform for patient scheduling, video consultations, and medical record workflows, with an architecture designed for high availability and compliance-sensitive operations.",
    outcome: "Improved scheduling efficiency and supported significant growth without a major infrastructure rebuild.",
  },
  {
    client: "E-Commerce SaaS",
    scope: "SaaS Development / Mobile App",
    description:
      "Developed a multi-tenant e-commerce SaaS platform with custom storefronts, inventory management, payment processing, and coordinated web and mobile experiences.",
    outcome: "Enabled a faster launch cycle and gave the business a scalable foundation for transaction growth.",
  },
  {
    client: "Logistics Company",
    scope: "Backend Systems / API Development",
    description:
      "Engineered a real-time fleet tracking and route optimization system with scalable backend architecture, API integrations, and high-volume GPS data processing.",
    outcome: "Reduced manual dispatch work and improved operational visibility across active routes.",
  },
  {
    client: "FinTech Startup",
    scope: "Web & Mobile Application",
    description:
      "Shipped a cross-platform personal finance application with bank integrations, automated budgeting, transaction categorization, and secure account workflows.",
    outcome: "Helped the product team validate the market with a polished first release.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <MotionDiv variants={item} className="max-w-2xl mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Selected work</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Software projects shaped around business outcomes.
            </h2>
          </MotionDiv>

          <div className="space-y-0 border-t border-border/50">
            {projects.map((project) => (
              <MotionDiv
                key={project.client}
                variants={item}
                className="group border-b border-border/50 py-8 md:py-10"
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{project.client}</h3>
                        <p className="text-sm text-muted-foreground">{project.scope}</p>
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
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
