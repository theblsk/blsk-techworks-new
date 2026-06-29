import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { Eyebrow } from "@/components/eyebrow"
import { services, siteConfig } from "@/lib/site-content"

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | BLSK Labs`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | BLSK Labs`,
      description: service.metaDescription,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.metaDescription,
          provider: {
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
            areaServed: "Worldwide",
          },
          areaServed: "Worldwide",
          url: `${siteConfig.url}/services/${service.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: service.title,
              item: `${siteConfig.url}/services/${service.slug}`,
            },
          ],
        }}
      />
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/#services"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Services
            </Link>
            <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <Eyebrow className="mb-5">{service.title}</Eyebrow>
                <h1 className="text-4xl md:text-6xl tracking-tight leading-tight">
                  {service.h1}
                </h1>
              </div>
              <div className="md:col-span-5 md:pt-12">
                <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
                <Button asChild size="lg" className="mt-8 h-12 px-8">
                  <a href={siteConfig.bookingUrl}>
                    Discuss this service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What the work can include.</h2>
            </div>
            <div className="md:col-span-8 border-t border-border/50">
              {service.deliverables.map((item) => (
                <div key={item} className="border-b border-border/50 py-5 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Where it fits best.</h2>
            </div>
            <div className="md:col-span-8 grid gap-6 sm:grid-cols-3">
              {service.fit.map((item) => (
                <p key={item} className="border-t border-border/50 pt-5 text-muted-foreground leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <Eyebrow className="mb-5">Relevant proof</Eyebrow>
              <p className="font-display text-2xl md:text-3xl tracking-tight leading-snug">{service.proof}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
