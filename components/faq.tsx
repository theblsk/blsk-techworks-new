import { Eyebrow } from "@/components/eyebrow"
import { faqs } from "@/lib/site-content"

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Before a discovery call.
            </h2>
          </div>

          <div className="md:col-span-8 border-t border-border/50">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border/50 py-7">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
