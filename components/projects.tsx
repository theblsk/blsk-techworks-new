"use client"

import { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { getImageUrl } from "@/lib/supabase"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: true })
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence), { ssr: true })

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  link?: string
}

interface ProjectsProps {
  projects: Project[]
}

function ProjectCard({ project, isPriority = false }: { project: Project, isPriority?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const imageUrl = getImageUrl(project.image) || '/placeholder.jpg'

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video bg-muted">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
          quality={75}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-2">{project.subtitle}</p>
        <AnimatePresence initial={false}>
          <MotionDiv
            initial={{ height: 0 }}
            animate={{ height: isExpanded ? "auto" : "80px" }}
            exit={{ height: "80px" }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm">{project.description}</p>
          </MotionDiv>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {project.link && (
          <Button variant="ghost" size="sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Visit <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} isPriority={index === 0} />
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

