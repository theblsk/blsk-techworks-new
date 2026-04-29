"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { sendEmail } from "@/lib/sendEmail"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(e.currentTarget)

      if (result.success) {
        toast({
          title: "Message sent.",
          description: "We'll respond within one business day.",
        })
        formRef.current?.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Discuss your software project.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell us what you need to build. We&apos;ll review your requirements and respond within one business day with a practical assessment of scope, timeline, and fit.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Based in the United States</p>
              <p>Available for remote engagements worldwide</p>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-11 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-11 bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Custom web app, mobile app, SaaS platform..."
                    required
                    className="h-11 bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Project details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, timeline, and goals"
                    rows={5}
                    required
                    className="min-h-30 resize-y bg-transparent"
                  />
                </div>
                <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
