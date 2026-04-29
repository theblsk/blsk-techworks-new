"use client"

import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: true })

const capabilities = [
  {
    title: "Web Applications",
    description:
      "Full-stack web application development for customer portals, SaaS products, dashboards, and internal business tools. Built for performance, security, and scale.",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile app development for iOS and Android, with product-focused interfaces, dependable releases, and maintainable shared codebases.",
  },
  {
    title: "Backend Systems",
    description:
      "Scalable backend systems, API development, integrations, and data pipelines designed for production traffic, observability, and long-term maintainability.",
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS development, including authentication, billing, subscriptions, multi-tenancy, analytics, and the operational foundations needed to grow.",
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

export function WhatWeDo() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <MotionDiv variants={item} className="max-w-2xl mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">What we do</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Software development services for growing businesses.
            </h2>
          </MotionDiv>

          <div className="grid gap-px md:grid-cols-2 bg-border/50 border border-border/50 rounded-lg overflow-hidden">
            {capabilities.map((cap) => (
              <MotionDiv
                key={cap.title}
                variants={item}
                className="bg-background p-8 md:p-10"
              >
                <h3 className="text-lg font-semibold mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
