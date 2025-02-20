"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
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
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Redefining Ability<br />
              every step of the way
            </h2>
            <Button 
              asChild
              className="bg-black text-white hover:bg-black/90 mt-4 sm:mt-6 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
            >
              <Link href="/contact">Contact Now</Link>
            </Button>
          </div>

          <div className="lg:ml-auto w-40 sm:w-48 lg:w-52">
            <Image
              src="/logo.png"
              alt="Shaurya Logo"
              width={200}
              height={200}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        {/* Newsletter */}
        {/* <div className="mb-16">
          <h3 className="font-semibold mb-3 text-sm text-white">Newsletter</h3>
          <p className="text-sm mb-4 text-white/80">
            We'd love to share our love for engineering with you in our monthly newsletter.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="jane@domain.com"
              className="bg-white/10 border-none placeholder:text-white/50 text-white h-12 text-sm rounded-lg focus:bg-white/20 flex-1"
            />
            <Button
              type="submit"
              variant="secondary"
              className="whitespace-nowrap bg-transparent hover:bg-gray-300/20 text-white h-12 text-sm px-6 rounded-lg font-medium border border-gray-300"
            >
              Subscribe
            </Button>
          </form>
        </div> */}

        {/* Addresses and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 text-black/80">

        {/* Newsletter */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-3 text-sm text-black">Newsletter</h3>
          <p className="text-sm mb-4 text-black/80">
            We'd love to share our love for engineering with you in our monthly newsletter.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="jane@domain.com"
              className="bg-white/10 border-none placeholder:text-black/50 text-black h-12 text-sm rounded-lg focus:bg-white/20 flex-1"
            />
            <Button
              type="submit"
              variant="secondary"
              className="whitespace-nowrap bg-white/10 hover:bg-gray-300/20 text-black h-12 text-sm px-6 rounded-lg font-medium border border-white/10"
            >
              Subscribe
            </Button>
          </form>
        </div>

          {/* Address 1 */}
          <div>
            <h3 className="font-semibold mb-3 text-sm text-black">Registered Office</h3>
            <p className="text-sm mb-4">
              B 104/2, Block B,<br />
              Maharani Bagh,<br />
              New Friends Colony,<br />
              New Delhi, Delhi 110065
            </p>
            <Link href="tel:+911234567890" className="text-sm hover:text-black">
              +91 123 456 7890
            </Link>
          </div>

          {/* Address 2 */}
          <div>
            <h3 className="font-semibold mb-3 text-sm text-black">Delhi Center</h3>
            <p className="text-sm mb-4">
              B-538 Ground floor,<br />
              New Friends Colony,<br />
              Delhi 110025
            </p>
            <Link href="tel:+911234567890" className="text-sm hover:text-black">
              +91 123 456 7890
            </Link>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm text-black">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm hover:text-black">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover:text-black">Terms of Service</Link>
              <Link href="/contact" className="text-sm hover:text-black">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-black/80 text-sm mt-12 pb-8 border-t border-black/10 pt-8 text-center">
          <p> 2025 Shaurya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}