import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { Eyebrow } from "@/components/eyebrow"
import { caseStudies, siteConfig } from "@/lib/site-content"

type CaseStudyPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {}
  }

  return {
    title: study.title,
    description: study.metaDescription,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | BLSK Labs`,
      description: study.metaDescription,
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | BLSK Labs`,
      description: study.metaDescription,
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.metaDescription,
          author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          mainEntityOfPage: `${siteConfig.url}/case-studies/${study.slug}`,
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
              name: "Case studies",
              item: `${siteConfig.url}/#work`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: study.title,
              item: `${siteConfig.url}/case-studies/${study.slug}`,
            },
          ],
        }}
      />
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/#work"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Selected work
            </Link>
            <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-8">
                <Eyebrow className="mb-5">{study.label}</Eyebrow>
                <h1 className="text-4xl md:text-6xl tracking-tight leading-tight">
                  {study.title}
                </h1>
              </div>
              <div className="md:col-span-4 md:pt-12">
                <p className="text-lg text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 py-8">
          <div className="max-w-6xl mx-auto px-6 grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Client</p>
              <p className="mt-2">{study.client}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Work</p>
              <p className="mt-2">{study.services.join(", ")}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Stack</p>
              <p className="mt-2">{study.stack.join(", ")}</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Challenge</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed md:col-span-8">{study.challenge}</p>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Solution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed md:col-span-8">{study.solution}</p>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Outcome</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed md:col-span-8">{study.outcome}</p>
          </div>
        </section>

        <section className="border-t border-border/50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Need similar engineering depth?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Book a call to discuss the product, data, or backend system you need to build.
              </p>
              <Button asChild size="lg" className="mt-8 h-12 px-8">
                <a href={siteConfig.bookingUrl}>
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
