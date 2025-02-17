"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, User, Edit, Play } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Section 1: Banner & Hero */}
      <section >
        {/* Top Banner */}
        <div className="w-full bg-gradient-to-r from-[#F8FAFF] via-[#EEF4FF] to-[#FFECEC] py-2.5">
          <div className="container flex items-center justify-center gap-4 text-[#535353]">
            <p className="text-sm">Get Quick response via contact us on WhatsApp</p>
            <Image src="/WhatsApp.png" alt="WhatsApp" width={20} height={20} />
            <span className="font-medium text-sm text-black">+91 12345 67890</span>
          </div>
        </div>

        {/* Hero */}
        <div className="relative bg-[#BFF9EA] rounded-[42px] mx-auto w-[90%] min-h-[400px] flex items-center justify-center px-6 mt-11">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#222223]/90 uppercase leading-none tracking-tighter">
              Contact us
            </h1>
          </div>
          
          {/* Support Button - Absolute positioned */}
          <div className="absolute bottom-8 flex items-center gap-3 z-10">
            <button className="bg-white hover:bg-gray-50 rounded-[12px] py-2 px-6 flex items-center gap-2">
              <span className="text-base font-medium">Support Shaurya</span>
            </button>
            <div className="bg-white hover:bg-gray-50 rounded-[12px] p-2 w-10 h-10 flex items-center justify-center">
              <span className="text-xl justify-center">→</span>
            </div>
            <button className="bg-white p-3 rounded-full border border-black hover:bg-gray-200 transition">
              <Play size={24} />
          </button>
          </div>

          {/* Illustration */}
          <div className="absolute bottom-0">
            <Image
              src="/contact.png"
              alt="Contact Illustration"
              width={300}
              height={200}
              className="mix-blend-darken"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[40px] font-bold text-[#34113F] leading-[1.2]">
                Have Questions?
                <br />
                <span className="text-[#4D194D]">Get in Touch!</span>
              </h2>
              <p className="text-[15px] text-[#454D55]/70 max-w-md">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#EDECE2] p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#344054]" />
                </div>
                <div>
                  <p className="text-[15px] text-[#344054]">
                    India — 723 17th Street, Office 478
                    <br />
                    Mumbai, MH 81566
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#EDECE2] p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-[#344054]" />
                </div>
                <p className="text-[15px] text-[#344054]">kiritgoti007@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#EDECE2] p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-[#344054]" />
                </div>
                <p className="text-[15px] text-[#344054]">+91 846 954 7012</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="relative">
                <Input 
                  placeholder="Name" 
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-2 text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
                />
                <div className="absolute right-0 top-2.5">
                  <User className="w-[18px] h-[18px] text-gray-400" />
                </div>
              </div>
              <div className="relative">
                <Input 
                  placeholder="Email Address" 
                  className="border-0 border-b border-gray-200 rounded-none px-0 py-2 text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
                />
                <div className="absolute right-0 top-2.5">
                  <Mail className="w-[18px] h-[18px] text-gray-400" />
                </div>
              </div>
            </div>

            <div className="relative">
              <Input 
                placeholder="Phone" 
                className="border-0 border-b border-gray-200 rounded-none px-0 py-2 text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D]"
              />
              <div className="absolute right-0 top-2.5">
                <Phone className="w-[18px] h-[18px] text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <select 
                className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 text-[15px] text-gray-400 focus:ring-0 focus:border-[#4D194D] bg-transparent"
              >
                <option value="">Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div className="relative">
              <Textarea
                placeholder="How can we help you ? Feel free to get in touch!"
                className="min-h-[100px] border-0 border-b border-gray-200 rounded-none px-0 py-2 text-[15px] placeholder:text-gray-400 focus:ring-0 focus:border-[#4D194D] resize-none"
              />
              <div className="absolute right-0 top-2.5">
                <Edit className="w-[18px] h-[18px] text-gray-400" />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox 
                id="terms" 
                className="w-4 h-4 mt-1 rounded-sm border-gray-300 text-[#4D194D] focus:ring-[#4D194D]" 
              />
              <label htmlFor="terms" className="text-sm text-gray-500">
                I agree that my data is collected and stored
              </label>
            </div>

            <Button className="bg-[#1D1D1D] hover:bg-[#2C2C2C] text-white rounded-[8px] px-6 py-3 text-[15px] font-medium h-auto">
              Get In Touch
            </Button>
          </form>
        </div>
      </section>

      {/* Section 3: Map */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-[#BFF9EA] rounded-[42px] w-full h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803960726523!2d72.89161007497611!3d19.033445682163067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sChembur%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1707669431090!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}