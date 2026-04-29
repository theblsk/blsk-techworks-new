import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { SelectedWork } from "@/components/selected-work"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <SelectedWork />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
