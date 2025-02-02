"use client"

import { useState, useRef } from "react"
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
        formRef.current?.reset()
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
    <section id="contact" className="min-h-screen py-16 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 min-h-[2.5rem] flex items-center justify-center">Let&apos;s work together!</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="min-h-[500px]"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 min-h-[5rem]">
                    <label htmlFor="name" className="text-sm font-medium block h-5">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2 min-h-[5rem]">
                    <label htmlFor="email" className="text-sm font-medium block h-5">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2 min-h-[5rem]">
                    <label htmlFor="subject" className="text-sm font-medium block h-5">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Message subject" 
                      required 
                      className="h-10"
                    />
                  </div>
                  <div className="space-y-2 min-h-[10rem]">
                    <label htmlFor="message" className="text-sm font-medium block h-5">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project" 
                      rows={6} 
                      required 
                      className="min-h-[144px] resize-y"
                    />
                  </div>
                  <div className="min-h-[44px]">
                    <Button type="submit" className="w-full h-11" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4 flex-shrink-0" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

