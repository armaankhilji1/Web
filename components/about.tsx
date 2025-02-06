'use client'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/utils/useScrollAnimation"

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  const team = [
    {
      name: "Sahil Khan",
      role: "Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sahil-WTRtzDgwCfz6rXjwXmOHFjWrR0KFoU.jpeg",
    },
    {
      name: "Armaan Khilji",
      role: "Co-Founder",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Armaan-Oro0PqxvvxddohSAGuSS7twYQwsgcW.jpeg",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/50">
      <div ref={ref} className={`container px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leading technology solutions provider, transforming businesses through innovation
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center animate-fade-in-up animate-delay-200">
              <p className="text-base sm:text-lg leading-7 sm:leading-8">
                MK Tech & Consulting is a premier technology consulting firm. 
                We specialize in providing comprehensive digital solutions that help businesses thrive 
                in the modern digital landscape. Our expertise spans across web development, mobile 
                applications, business analytics, SEO optimization, and AI automation.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8">
                Founded with a vision to bridge the gap between technology and business success, 
                we have helped numerous organizations achieve their digital transformation goals. 
                Our team of experts combines technical expertise with business acumen to deliver 
                solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={member.name} className={`overflow-hidden animate-fade-in-up animate-delay-${(index + 3) * 100} border-0`}>
                  <CardContent className="p-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="aspect-square object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

