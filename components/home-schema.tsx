import { JsonLd } from "@/components/json-ld"
import { caseStudies, faqs, services, siteConfig } from "@/lib/site-content"

export function HomeSchema() {
  const organizationId = `${siteConfig.url}/#organization`

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": organizationId,
          name: siteConfig.name,
          url: siteConfig.url,
          email: siteConfig.email,
          areaServed: "Worldwide",
          priceRange: "$$",
          description: siteConfig.description,
          knowsAbout: [
            "Custom software development",
            "Web application development",
            "Mobile app development",
            "SaaS development",
            "Backend development",
            "API development",
            "Data reconciliation",
            "AI-assisted workflows",
          ],
          sameAs: [],
          makesOffer: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${siteConfig.url}/services/${service.slug}`,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          url: siteConfig.url,
          name: siteConfig.name,
          publisher: {
            "@id": organizationId,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "BLSK Labs case studies",
          itemListElement: caseStudies.map((study, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${siteConfig.url}/case-studies/${study.slug}`,
            name: study.title,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
    </>
  )
}
