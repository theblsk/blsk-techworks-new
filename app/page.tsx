import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { getProjects } from "@/lib/getProjects"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Services />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

