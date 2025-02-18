"use client"

import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Employment() {
  return (
    <main className="px-4 sm:px-8 lg:px-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] lg:min-h-[600px] bg-[#FF7B8E] rounded-[32px] lg:rounded-[42px] px-6 sm:px-12 lg:px-24 pt-12 lg:pt-16">
        {/* Content Container */}
        <div className="relative z-10 max-w-[600px]">
          {/* Title with Play Button */}
          <div className="flex items-center gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[4vw] xl:text-6xl uppercase tracking-tight text-[#222223] leading-tight">
              The <span className="font-extrabold">SFT</span>
            </h1>
            <button className="bg-[#FFE3E7] p-2 sm:p-3 rounded-full border hover:bg-gray-200 transition">
              <Play className="text-[#FF7B8E] fill-[#FF7B8E] w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Subtitle */}
          <h2 className="text-4xl sm:text-5xl lg:text-[4vw] xl:text-6xl uppercase text-[#222223] leading-tight font-extrabold">
            Ecosystem
          </h2>

          {/* Description Text */}
          <p className="text-[#222223] font-medium text-base sm:text-lg max-w-[90%] sm:max-w-full mt-4">
            Shaurya Foundation Trust (SFT) has dedicated 11 years to empowering
            individuals with intellectual challenges by providing essential
            skills and fostering independent living. We've made significant
            strides in removing barriers, and over the next five years, we'll
            focus on creating assisted employment models to ensure all trainees,
            regardless of the severity of their challenges, can achieve
            independent and productive lives through meaningful employment.
          </p>
        </div>

        {/* Hero Image - Positioned Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[80%] sm:w-[70%] lg:w-[60%] h-[80%] sm:h-[85%] lg:h-[90%]">
          <Image
            src="/employement/hero.png"
            alt="hero-image"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* CTA Buttons - Bottom Left */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-12 lg:left-24 flex items-center gap-3 sm:gap-4">
          <button className="flex items-center gap-2 sm:gap-4 bg-[#FFE3E7] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-base sm:text-lg font-medium border rounded-full hover:bg-gray-200 transition">
            Support Shaurya
          </button>
          <button className="bg-[#FFE3E7] p-2 sm:p-3 lg:p-4 rounded-full border hover:bg-gray-200 transition">
            <ArrowRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      <div className="px-0 sm:px-4 lg:px-8"> {/*required padding from both sides*/}
        {/* ARTOPIA */}
        <section className="bg-[#FACAD1] border rounded-[32px] lg:rounded-[42px] overflow-hidden mt-8 sm:mt-12">
          {/* Content Container */}
          <div className="px-6 sm:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8 w-full">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <Image
                src="/employement/icon-artopia.png"
                alt="icon-about"
                width={80}
                height={80}
                className="object-contain w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24"
              />
            </div>

            {/* Title */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-[#384C75] font-bold leading-none">
                ARTOPIA
              </h1>
            </div>

            {/* Paragraph */}
            <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
              <p className="text-sm sm:text-base text-[#041527] leading-[1.6] tracking-wide">
                SFT Artopia is an initiative by Shaurya Foundation Trust's Art
                unit, where neurodiverse artists create various forms of art.
                Art has been instrumental in developing problem-solving skills,
                enhancing communication, and boosting self-esteem. It creates a
                safe and creative outlet for self-expression, especially for
                those who struggle to express themselves verbally...
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full h-auto relative">
            <Image
              src="/employement/artopia.png"
              alt="about"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* 2 COLUMN SECTION */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {/* card-1 */}
          <div className="bg-[#F0DA69] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-1.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-1.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#384C75] font-bold leading-none">
                  BAKERS DEN
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#041527] leading-[1.6] tracking-wide">
                  SFT's bakery was our first skilling project, where trainees have
                  excelled beyond expectations, mastering the intricate skills of
                  baking cookies, cakes, muffins, and more. This project, tailored
                  to their unique needs, has transformed them...
                </p>
              </div>
            </div>
          </div>

          {/* card-2 */}
          <div className="bg-[#2C438A] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-2.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#FFFFFF] font-bold leading-none">
                  DIGITAL HUB
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#FFFFFF] leading-[1.6] tracking-wide">
                  SFT trainees possess remarkable, untapped talents,
                  particularly in digital skills, which we actively nurture to
                  help them lead more self-sustainable lives. They excel in
                  artistic and realistic tasks, enjoying work that involves
                  creativity, design...
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-2.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* card-3 */}
          <div className="bg-[#3A3844] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-3.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-3.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#F3F3F3] font-bold leading-none">
                  SUBLIMATION
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#F3F3F3] leading-[1.6] tracking-wide">
                  The SFT Sublimation Unit is a newly launched initiative where
                  our young adults explore various art styles and transfer them
                  onto different mediums. The process involves photoshopping...
                </p>
              </div>
            </div>
          </div>

          {/* card-4 */}
          <div className="bg-[#A3DAC2] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-4.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#000000] font-bold leading-none">
                  SFT ROAR
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#26262B] leading-[1.6] tracking-wide">
                  SFT Roar Project is a salesmanship initiative that empowers
                  trainees to pitch their products to the outside world,
                  managing logistics, stock, and Finances independently.
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-4.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* card-5 */}
          <div className="bg-[#9191E1] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-5.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-5.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#F3F3F3] font-bold leading-none">
                  SFT GREEN
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#FFFFFF] leading-[1.6] tracking-wide">
                  SFT Culinary Club is dedicated to teaching essential cooking
                  techniques like slicing, dicing, roasting, and appliance
                  handling, all aimed at promoting self-sufficiency.
                </p>
              </div>
            </div>
          </div>

          {/* card-6 */}
          <div className="bg-[#F0AD84] border rounded-[32px] lg:rounded-[42px] overflow-hidden h-full">
            {/* Content Container */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 w-full">
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/employement/icon-card-6.png"
                  alt="icon-about"
                  width={60}
                  height={60}
                  className="object-contain w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20"
                />
              </div>

              {/* Title */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl uppercase text-[#222222] font-bold leading-none">
                  PACKAGING
                </h1>
              </div>

              {/* Paragraph */}
              <div className="w-full">
                <p className="text-sm sm:text-base text-[#26262B] leading-[1.6] tracking-wide">
                  Shaurya Foundation Trust is dedicated to creating an Assisted
                  Employment Model for neurodiverse young adults. Packaging
                  Panthers is a key initiative in this effort, providing
                  meaningful employment and financial empowerment to these
                  individuals.
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[240px] sm:h-[260px] lg:h-[300px]">
              <Image
                src="/employement/card-6.png"
                alt="about"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        
        {/* THE JOURNEY */}
        <section className="relative w-full h-full min-h-[70vh] bg-[#FF7715] rounded-[42px] mt-20 overflow-hidden flex justify-center items-center">
          {/* Title */}
          <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-center text-[6vw] lg:text-[6vw] uppercase text-white font-light">
            The <span className="font-extrabold">Journey</span>
          </h1>

          {/* Images Container */}
          <div className="absolute inset-0 w-full h-full">
            {/* Center Image */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[40%] h-auto">
              <Image
                src="/employement/j-2.png"
                alt="center-image"
                width={800}
                height={600}
                className="object-contain object-bottom"
              />
            </div>

            {/* Left Cartoon */}
            <div className="absolute left-10 bottom-0 w-[20%] h-auto">
              <Image
                src="/employement/j-1.png"
                alt="left-cartoon"
                width={500}
                height={400}
                className="object-contain object-bottom"
              />
            </div>

            {/* Right Cartoon */}
            <div className="absolute right-10 bottom-0 w-[20%] h-auto">
              <Image
                src="/employement/j-3.png"
                alt="right-cartoon"
                width={500}
                height={400}
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* SLIDER */}
        <section className="relative w-full bg-[#FFCFD6] rounded-[42px] mt-20 px-8 py-16">
          {/* Cards Container - Horizontal Scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar min-h-[600px]">
            {/* Card 1 */}
            <div className="w-[430px] h-[550px] bg-[#E1EDFF] rounded-[24px] overflow-hidden flex-shrink-0">
              <div className="h-[55%] relative">
                <Image
                  src="/employement/slider-1.png"
                  alt="slider-image"
                  fill
                  className="object-contain p-12"
                />
              </div>
              <div className="h-[45%] px-8 py-8 text-center flex flex-col justify-center">
                <h3 className="text-[28px] font-bold mb-5 text-[#384C75] uppercase tracking-wide">
                  Regimen
                </h3>
                <p className="text-[15px] text-[#384C75] leading-[1.6]">
                  At Shaurya Foundation Trust (SFT), we recognize the unique
                  needs of intellectually disabled individuals...
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[430px] h-[550px] bg-[#07A2BB] rounded-[24px] overflow-hidden flex-shrink-0">
              <div className="h-[55%] relative">
                <Image
                  src="/employement/slider-2.png"
                  alt="slider-image"
                  fill
                  className="object-contain p-12"
                />
              </div>
              <div className="h-[45%] px-8 py-8 text-center flex flex-col justify-center">
                <h3 className="text-[28px] font-bold mb-5 text-white uppercase tracking-wide">
                  Rehersal
                </h3>
                <p className="text-[15px] text-white leading-[1.6]">
                  At Shaurya Foundation Trust (SFT), we prepare individuals for
                  the workforce through immersive, hands-on experiences...
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[430px] h-[550px] bg-[#E3CF6B] rounded-[24px] overflow-hidden flex-shrink-0">
              <div className="h-[55%] relative">
                <Image
                  src="/employement/slider-3.png"
                  alt="slider-image"
                  fill
                  className="object-contain p-12"
                />
              </div>
              <div className="h-[45%] px-8 py-8 text-center flex flex-col justify-center">
                <h3 className="text-[28px] font-bold mb-5 text-[#384C75] uppercase tracking-wide">
                  Rehabilitation
                </h3>
                <p className="text-[15px] text-[#384C75] leading-[1.6]">
                  The final step at Shaurya Foundation Trust (SFT) is
                  facilitating the safe integration of individuals into the
                  workforce
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-[430px] h-[550px] bg-[#3CB8AA] rounded-[24px] overflow-hidden flex-shrink-0">
              <div className="h-[55%] relative">
                <Image
                  src="/employement/slider-4.png"
                  alt="slider-image"
                  fill
                  className="object-contain p-12"
                />
              </div>
              <div className="h-[45%] px-8 py-8 text-center flex flex-col justify-center bg-[#3DB8AA]">
                <h3 className="text-[28px] font-bold mb-5 text-white uppercase tracking-wide">
                  A small bit go a long way
                </h3>
                <p className="text-[15px] text-white leading-[1.6]">
                  At Shaurya Foundation Trust (SFT), we are dedicated to
                  empowering individuals on the neurodivergent spectrum,
                </p>
              </div>
            </div>

          </div>

          {/* Custom CSS for hiding scrollbar */}
          <style jsx global>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </section>

        {/* AVATARS */}
        <section className="mt-20">
          <div className="w-full">
            <Image
              src="/employement/avatars.png"
              alt="about"
              width={1920}
              height={1080}
              style={{ mixBlendMode: "darken" }}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Number cards */}
        <section className="flex gap-6 mt-20 mb-40 px-8">
          {/* Card 1 */}
          <div className="flex-1 px-12 py-10 border rounded-[24px] bg-[#F6F5F4]">
            <h1 className="text-[#9191E1] text-6xl font-extrabold mb-2">
              100+
            </h1>
            <p className="text-[#39393B] text-xl font-semibold">
              Talented Teammates
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 px-12 py-10 border rounded-[24px] bg-[#F6F5F4]">
            <h1 className="text-[#FF7715] text-6xl font-extrabold mb-2">48</h1>
            <p className="text-[#39393B] text-xl font-semibold">
              Successful Projects
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 px-12 py-10 border rounded-[24px] bg-[#F6F5F4]">
            <h1 className="text-[#9191E1] text-6xl font-extrabold mb-2">7+</h1>
            <p className="text-[#39393B] text-xl font-semibold">
              Successful Collaborations
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
