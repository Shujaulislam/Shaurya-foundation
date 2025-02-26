"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { Phone } from "lucide-react"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer
      className="relative overflow-hidden rounded-tr-[100px]"
      style={{
        backgroundImage: "url(/footer-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Redefining Ability
              <br />
              every step of the way
            </h2>
            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl"
            >
              <Link href="/contact">Contact Now</Link>
            </Button>
          </div>

          <div className="lg:ml-auto w-32 sm:w-40 lg:w-52 2xl:w-auto">
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
      <div className="container mx-auto px-4 sm:px-6 pt-8 lg:pt-12">
        {/* Addresses and Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-black/80">
          {/* Newsletter - Takes full width on smaller screens */}
          <div className="lg:col-span-4 sm:col-span-2">
            <h3 className="font-semibold mb-3 text-sm text-black">
              Newsletter
            </h3>
            <p className="text-sm mb-4 text-black/80">
              We'd love to share our monthly newsletter with you.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
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

          {/* Addresses */}
          <div className="lg:col-span-4 sm:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-black">
                Registered Office
              </h3>
              <p className="text-sm mb-4">
                B 104/2, Western Avenue,
                <br />
                Maharani Bagh,
                <br />
                New Friends Colony,
                <br />
                New Delhi, Delhi 110065
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm text-black">
                Delhi Center
              </h3>
              <p className="text-sm mb-4">
                B-538 Ground floor,
                <br />
                New Friends Colony,
                <br />
                Delhi 110025
              </p>
            </div>
          </div>

          {/* Contact and Quick Links */}
          <div className="lg:col-span-4 sm:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-black">
                Reach out to Us
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="tel:01140518320"
                  className="text-sm hover:text-black"
                >
                  <span className="inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    011 40518320
                  </span>
                </Link>
                <Link
                  href="tel:+919650315800"
                  className="text-sm hover:text-black"
                >
                  <span className="inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 9650315800
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sm text-black">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                <Link href="/privacy" className="text-sm hover:text-black">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm hover:text-black">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-sm hover:text-black">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-black/80 text-sm mt-12 pb-8 border-t border-black/10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shaurya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}