"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, AlertCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sendEmail } from "@/app/actions"
import { useScrollAnimation } from "@/utils/useScrollAnimation"

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const services = [
    "Website Development",
    "App Development",
    "Business Insights",
    "SEO Optimization",
    "Social Media Enhancement",
    "AI Automation",
    "Other"
  ]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage(null)

    try {
      if (!formRef.current) {
        throw new Error('Form not found')
      }

      const formData = new FormData(formRef.current)
      console.log('Submitting form data')
      const result = await sendEmail(formData)
      console.log('Received result:', result)

      if (result.success) {
        setSubmitStatus('success')
        formRef.current.reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div ref={ref} className={`container px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch with us to discuss how we can help transform your business
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <Card className="animate-fade-in-up animate-delay-200 border-0">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" required />
                  <Input name="lastName" placeholder="Last Name" required />
                </div>
                <Input name="email" type="email" placeholder="Email" required />
                <Select name="service" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea name="message" placeholder="Message" required />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">Failed to send message. Please try again or use the contact information below.</span>
                    {errorMessage && (
                      <span className="block mt-2">
                        <AlertCircle className="inline mr-2" size={16} />
                        {errorMessage}
                      </span>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
          <Card className="animate-fade-in-up animate-delay-300 border-0">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm">+91 7208528121</p>
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm">+91 7977398981</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm">mktechconsulting1@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

