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
        <div 
          className="absolute inset-0 bg-muted animate-pulse" 
          style={{ 
            opacity: isImageLoaded ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }} 
        />
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          style={{ 
            opacity: isImageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          priority={isPriority}
          loading={isPriority ? 'eager' : 'lazy'}
          quality={75}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <CardContent className="flex-grow p-4 flex flex-col">
        <div className="min-h-[4rem] mb-2 flex flex-col justify-center">
          <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-1">{project.subtitle}</p>
        </div>
        <div className="flex-grow">
          <AnimatePresence initial={false}>
            <MotionDiv
              initial={false}
              animate={{ height: isExpanded ? "auto" : "80px" }}
              className="overflow-hidden"
              style={{ minHeight: "80px", maxHeight: isExpanded ? "none" : "80px" }}
            >
              <p className="text-sm leading-relaxed">{project.description}</p>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center h-[52px]">
        <div className="w-20">
          {project.link && (
            <Button variant="ghost" size="sm" asChild className="h-9">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                Visit <ExternalLink className="h-4 w-4 flex-shrink-0" />
              </a>
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Show less" : "Show more"}
          className="h-9"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 flex-shrink-0" />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="min-h-screen py-16 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 min-h-[2.5rem] flex items-center justify-center">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} isPriority={index === 0} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

