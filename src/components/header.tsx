'use client'

import { useState } from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2C438A] rounded-lg flex items-center justify-center">
              <Image 
                src="/logo2.png" 
                alt="Shaurya Logo" 
                width={24} 
                height={24}
                className="brightness-0 invert" 
              />
            </div>
            <span className="text-[#2C438A] text-xl font-bold">Shaurya</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <nav className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
          <Link href="/admission" className="text-sm/6 font-semibold text-gray-900">
            Admissions
          </Link>
          <Link href="/employement" className="text-sm/6 font-semibold text-gray-900">
            Employement
          </Link>
          <Link href="/about" className="text-sm/6 font-semibold text-gray-900">
            About Us
          </Link>
        </nav>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            className="bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2 rounded-full"
          >
            Contact Now →
          </Button>
        </div>
      </div>
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2C438A] rounded-lg flex items-center justify-center">
                <Image 
                  src="/logo2.png" 
                  alt="Shaurya Logo" 
                  width={24} 
                  height={24}
                  className="brightness-0 invert" 
                />
              </div>
              <span className="text-[#2C438A] text-xl font-bold">Shaurya</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <nav className="space-y-2 py-6">
                <Link
                  href="/"
                  className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                   Home
                </Link>
                
                <Link
                  href="/admission"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Admissions
                </Link>
                <Link
                  href="/employement"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Employement
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
              </nav>

              {/* contact button */}
              <div className="py-6">
                <Button 
                  className="w-full bg-[#2C438A] hover:bg-[#2C438A]/90 text-sm text-white px-5 py-2 rounded-full"
                >
                  Contact Now →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
