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
    <footer className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 rounded-tr-[100px] bg-gradient-to-br from-[#6B8BF5] via-[#9B7BF7] to-[#C4E1FF] opacity-90" />

      {/* Orange decorative shape */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-500/10 blur-3xl" />

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
            className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-2 text-base"
          >
            Contact Now →
          </Button>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 text-black bg-slate-500">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Newsletter</h3>
            <p className="text-sm mb-4 text-black/70">
              We'd love to share our love for engineering with you in our monthly newsletter.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="jane@domain.com"
                className="bg-white/90 border-none placeholder:text-black/50 text-black h-10 text-sm rounded-md"
              />
              <Button
                type="submit"
                variant="secondary"
                className="whitespace-nowrap bg-black text-white hover:bg-black/90 h-10 text-sm px-4"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Blog
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Careers
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Social</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Discord
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                LinkedIn
              </Link>
            </nav>
          </div>

          {/* Product */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Product</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Overview
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Roadmap
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Changelog
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Book a demo
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <nav className="flex flex-col gap-2.5">
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Documentation
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-black/70 hover:text-black">
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}