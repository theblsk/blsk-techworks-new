import { getProjects } from "@/lib/getProjects"
import { Projects } from "@/components/projects"
import { Suspense } from "react"

export const revalidate = 900;

export default async function ProjectsPage() {
  try {
    const projects = await getProjects()
    
    return (
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects projects={projects} />
      </Suspense>
    )
  } catch (error) {
    console.error("Error loading projects:", error)
    return <div>Failed to load projects. Please try again later.</div>
  }
} 