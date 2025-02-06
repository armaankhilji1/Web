'use client'
import Link from 'next/link'
import Image from "next/image"
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import { useEffect } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <footer className="border-0 bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-24%20at%2017.18.30_5dc4637b.jpg-3gh43fNpQJVRXHGIUfEhLGrNpbHIQK.jpeg" 
              alt="MK Tech & Consulting" 
              width={300} 
              height={150}
              className="object-contain"
            />
            <p className="text-sm text-muted-foreground max-w-md">
              Transforming businesses through innovative technology solutions
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="https://drive.google.com/file/d/1mdIEttaZvdN_q0ceeytAKyfvUtBDAq0X/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1aedGUupVkqBYidxsHMmWMUIT3WdSxAt9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1rH2J-UoqynrkVmcFKpkkEBvj-gDKaOUv/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Business Insights
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1v0ZUou7ZvUMSBA6f07WeQa56C7p0YR_z/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1BAucTWWTkXAsgdTrYhP0Wg-QLCZf3cAa/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Social Media Enhancement
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1pxDaT5clKOR8BegIqdAwfWrB8RWUrt4D/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8  pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} MK Tech & Consulting. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://x.com/MKTechConsult?t=GO_952uVVFx5DX2A34DtyQ&s=08" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/mktechconsult?utm_source=qr&igsh=MW1zeGtyZWdjenVtOA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/mk-tech-consulting/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

