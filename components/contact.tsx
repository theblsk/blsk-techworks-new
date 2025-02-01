"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { sendEmail } from "@/lib/sendEmail"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    // This ensures the toast is properly initialized
    toast({
      title: "Welcome",
      description: "Feel free to reach out!",
    })
  }, [toast])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(e.currentTarget)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        formRef.current?.reset() // Use optional chaining with the ref
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Let&apos;s work together!</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Message subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project" rows={6} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

