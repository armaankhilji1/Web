'use client'
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/utils/useScrollAnimation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3129957-hd_1280_720_25fps-9gyQnQwZKYJEvCQIFEE91KTGdUNTMf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div ref={ref} className={`text-center max-w-3xl px-4 space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your Business with Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering businesses through innovative technology solutions. From web development to AI automation, we help you stay ahead in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-200"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white hover:bg-white/20"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

