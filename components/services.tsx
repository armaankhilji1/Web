'use client'
import { Code2, Smartphone, LineChart, Search, Share2, Bot } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/utils/useScrollAnimation"

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to enhance your online presence.",
      icon: Code2,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: Smartphone,
    },
    {
      title: "Business Insights",
      description: "Data-driven insights to help small businesses make informed decisions and grow.",
      icon: LineChart,
    },
    {
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search engine rankings and visibility.",
      icon: Search,
    },
    {
      title: "Social Media Enhancement",
      description: "Strategic social media management to boost your brand's online engagement.",
      icon: Share2,
    },
    {
      title: "AI Automation",
      description: "Cutting-edge AI solutions to automate and optimize your business processes.",
      icon: Bot,
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32">
      <div ref={ref} className={`container ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className={`animate-fade-in-up animate-delay-${index * 100} border-0`}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

