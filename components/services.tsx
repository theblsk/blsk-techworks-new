"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Server, Database, Cloud } from "lucide-react"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: true })
const MotionH2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), { ssr: true })

const services = [
  {
    title: "Website Development",
    description: "I use React with Vite & Next.js to build modern, performant web applications.",
    icon: Globe,
  },
  {
    title: "Mobile Development",
    description: "I leverage React Native to create cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Backend Development",
    description:
      "I utilize NodeJS for most projects and .Net Core for specific cases, ensuring robust and scalable server-side solutions.",
    icon: Server,
  },
  {
    title: "Database Development",
    description:
      "I work with PostgreSQL for relational data, MongoDB for document-based storage, and Firestore for real-time applications.",
    icon: Database,
  },
  {
    title: "Hosting",
    description:
      "I deploy applications using Firebase, Render, DigitalOcean, AWS, and Supabase, choosing the best platform for each project's needs.",
    icon: Cloud,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="services" className="py-16">
      <MotionDiv
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <MotionH2
          variants={item}
          className="text-3xl font-bold mb-8"
        >
          Services
        </MotionH2>
        <MotionDiv
          variants={container}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <MotionDiv
              key={service.title}
              variants={item}
              className="flex"
            >
              <Card className="flex flex-col w-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

