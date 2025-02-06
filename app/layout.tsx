import { Inter } from 'next/font/google'
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MK Tech & Consulting | Web Development, App Development & Business Consulting",
  description: "Leading technology consulting firm specializing in website development, app development, SEO, and AI automation. Transform your business with our expert solutions.",
  keywords: "tech consulting, web development, app development, business insights, SEO services, AI automation, digital transformation, technology solutions",
  openGraph: {
    title: "MK Tech & Consulting | Technology Solutions & Business Consulting",
    description: "Transform your business with expert technology solutions. Web development, app development, SEO, and AI automation services.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}

