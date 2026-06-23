import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { SelectedWork } from "@/components/selected-work"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Engagements } from "@/components/engagements"
import { FAQ } from "@/components/faq"
import { HomeSchema } from "@/components/home-schema"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeSchema />
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <SelectedWork />
        <Engagements />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
