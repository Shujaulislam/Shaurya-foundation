'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  // Navigation items array
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/admission", label: "Admissions" },
    { href: "/employment", label: "Employment" },
    { href: "/about", label: "About Us" }
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2C438A] rounded-lg flex items-center justify-center">
                <Image
                  src="/logo2.png"
                  alt="Shaurya Logo"
                  width={50}
                  height={50}
                  className="brightness-0 invert mix-blend-difference"
                />
              </div>
              <span className="text-[#2C438A] text-xl font-extrabold">
                Shaurya
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2 rounded-full"
            >
              Contact Now →
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu - Separate from header */}
      {mobileMenuOpen && (
        <div className="relative z-50">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-gray-900/70" 
            aria-hidden="true" 
            onClick={closeMobileMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="flex items-center gap-3"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 bg-[#2C438A] rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo2.png"
                    alt="Shaurya Logo"
                    width={24}
                    height={24}
                    className="brightness-0 invert mix-blend-difference"
                  />
                </div>
                <span className="text-[#2C438A] text-xl font-bold">Shaurya</span>
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="block w-full bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2 rounded-full text-center"
                    onClick={closeMobileMenu}
                  >
                    Contact Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}