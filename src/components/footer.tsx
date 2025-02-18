"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import type React from "react"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer 
      className="relative overflow-hidden rounded-tr-[100px]"
      style={{
        backgroundImage: 'url(/footer-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main content */}
      <div className="relative px-8 md:px-16 pt-24 pb-16 mx-auto max-w-7xl">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
            Redefining Ability
            <br />
            every step of the way
          </h2>
          <Button
            variant="secondary"
            className="bg-[#FFCFD6] text-[#2C438A] hover:bg-[#FFCFD6]/90 rounded-full px-8 py-4 text-lg font-semibold"
          >
            Contact Now →
          </Button>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-10 gap-y-12 text-white">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-3 text-sm">Newsletter</h3>
            <p className="text-sm mb-4 text-white/80">
              We'd love to share our love for engineering with you in our monthly newsletter.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="jane@domain.com"
                className="bg-white/10 border-none placeholder:text-white/50 text-white h-12 text-sm rounded-lg focus:bg-white/20"
              />
              <Button
                type="submit"
                variant="secondary"
                className="whitespace-nowrap bg-[#FFCFD6] text-[#2C438A] hover:bg-[#FFCFD6]/90 h-12 text-sm px-6 rounded-lg font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Company */}
          <div className="lg:col-span-1 pl-4">
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Blog
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Careers
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Social</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Discord
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                LinkedIn
              </Link>
            </nav>
          </div>

          {/* Product */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Product</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Overview
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Roadmap
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Changelog
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Book a demo
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Documentation
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}