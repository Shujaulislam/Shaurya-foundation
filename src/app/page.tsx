"use client"

import { ArrowRight, ArrowUpRight, Play, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "A Puzzle Without All Its Pieces Is Incomplete. At Shaurya Foundation Trust (SFT), We Strive to Complete the Picture",
    bgColor: "bg-[#A3DAC2]",
    image:"/card-1.png"
  },
  {
    title: "Independent Living Program",
    bgColor: "bg-[#F0DA69]",
    image: "/card-2.png"
  },
  {
    title: "Assisted Employment Unit",
    bgColor: "bg-[#FFCFD6]",
    image: "/card-3.png"
  },
  {
    title: "By building an Inclusive Ecosystem, we aim to create a society where everyone is valued and respected.",
    bgColor: "bg-[#92BDF6]",
    image: "/card-4.png"
  }
];

const awards = [
  { src: "/guinness.png", alt: "Guinness World Records", borderColor: "border-t-blue-500" },
  { src: "/GPTW.png", alt: "Great Place To Work", borderColor: "border-t-blue-500" },
  { src: "/nabh.png", alt: "NABH Accredited", borderColor: "border-t-red-500" },
  { src: "/outlook-health.png", alt: "Outlook Health", borderColor: "border-t-blue-500" },
  { src: "/the-week.png", alt: "The Week", borderColor: "border-t-blue-500" },
];

export default function Home() {
  return (
    <main className="lg:px-16 xl:px-24">
      {/* Hero Section with Image Overlay */}
      <section className="relative w-full h-screen xl:mt-8 mb-20 overflow-hidden rounded-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.png"
            alt="Shaurya team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bg-[url(/hero-bg.png)] inset-0 bg-black/40" />{" "}
          {/* Overlay */}
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Title Container */}
          <div className="flex flex-col text-center mb-6">
            <div className="relative">
              <h1 className="lg:text-[120px] xl:text-[200px] font-black text-[#EEF5FF] tracking-tight">
                SHAURYA
              </h1>
              <span className="absolute bottom-0 right-0 lg:text-[24px] xl:text-[32px] font-bold text-[#EEF5FF]">
                FOUNDATION
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white text-center text-2xl max-w-4xl mb-12 leading-relaxed">
            A Non-Profit Transforming The Lives Of Individuals With Special
            Needs Through Holistic Education, Life Skills, And Community
            Integration.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 ">
            <button className="flex text-center gap-2 hover:scale-105 transform transition-transform bg-[#E8F1FF] hover:bg-[#E8F1FF]/90 font-semibold text-lg text-black lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl">
              <TvMinimalPlay />
              Watch Video
            </button>
            <button className="flex text-center gap-2 hover:scale-105 transform transition-transform bg-white hover:bg-white/90 font-semibold text-black lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl ">
              Support Shaurya
              <ArrowUpRight />
            </button>
          </div>

          {/* Scroll Down */}
          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="absolute bottom-8 text-white text-sm xl:text-xl font-medium hover:opacity-80 transition-opacity"
          >
            Slide DOWN
          </button>
        </div>
      </section>

      {/* Initiatives/Programs Cards */}
      <section className=" px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} rounded-2xl p-6 relative min-h-[320px] overflow-hidden transition-transform hover:scale-105`}
            >
              <h3 className="text-[#252B61] font-bold text-xl mb-4 relative z-10 max-w-[80%]">
                {card.title}
              </h3>

              <div className="absolute bottom-0 right-0 w-[70%] h-auto">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <button
                className="absolute bottom-6 left-6 w-12 h-12 bg-[#252B61] text-white rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110"
                aria-label="Learn more"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Header */}
      <section className="mb-10">
        <div className="sm:mb-8 md:mb-14 lg:mb-16 xl:mb-20 flex items-end justify-between">
          <h2 className="text-[90px] font-extrabold text-[#252525] leading-none">
            Upcoming
            <br />
            Events
          </h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-2xl text-gray-700 max-w-xl">
              Join our upcoming events for contribution...
            </p>
            <Link
              href="/events"
              className="flex items-center gap-2 bg-[#FDF8F1] px-4 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#333] font-medium">View</span>
              <ArrowUpRight strokeWidth={3} size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="mb-10 md:mb-14 xl:mb-20">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large Event Card */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 row-span-2 bg-[#F0DA69] rounded-xl p-8 relative">
            <span className="inline-block px-3 py-1 bg-white rounded-lg text-sm font-medium mb-4">
              Sft Community Outreach
            </span>
            <div className="flex flex-col h-full">
              <div className="flex gap-4 relative">
                <div className="space-y-4 flex-1">
                  <h3 className="text-[32px] font-bold leading-tight text-[#252525]">
                    Inclusivity
                    <br />
                    Sensitization
                  </h3>
                  <p className="text-[#252525]/80 text-base">
                    A Sneak Peak Of Training Workshop
                    <br />
                    For Anganwadi Workers At SFT Palwal
                    <br />
                    Campus. It Was....
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 bg-black">
                  <Image
                    src="/event-1.png"
                    alt="Inclusivity Sensitization"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-[#252525] ml-0.5" />
            </div>
          </div>

          {/* Medium Event Card */}
          <div className="col-span-12 md:col-span-4 lg:col-span-6 bg-[#4D5899] text-white rounded-xl p-6 relative">
            <span className="inline-block px-3 py-1 bg-white text-black rounded-lg text-sm font-medium mb-4">
              Sft Triumph
            </span>
            <div className="flex justify-between items-start gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Global Autism Project
                </h3>
                <p className="text-gray-200 text-sm">
                  Join us in making a difference
                </p>
              </div>
              <Image
                src="/event-2.png"
                alt="Global Autism Project"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>

          {/* Small Event Cards */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-[#A3DAC2] rounded-xl p-6 relative">
            <span className="inline-block px-3 py-1 bg-white rounded-lg text-sm font-medium mb-4">
              Live Event
            </span>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2">Self Advocacy</h3>
                <p className="text-gray-700 text-sm">Learn to speak up</p>
              </div>
              <Image
                src="/event-3.png"
                alt="Self Advocacy"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-[#FFC7D1] rounded-xl p-6 relative">
            <span className="inline-block px-3 py-1 bg-white rounded-lg text-sm font-medium mb-4">
              Live Event
            </span>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2">Sing And Paint</h3>
                <p className="text-gray-700 text-sm">Express through art</p>
              </div>
              <Image
                src="/event-4.png"
                alt="Sing And Paint"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Shaurya Section */}
      <section className="bg-[#C7D0FF] rounded-xl mb-10 md:mb-14 xl:mb-20 p-8 md:p-12 lg:p-16 xl:p-20 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8 lg:space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900">
            About Shaurya.
          </h2>
          <p className="text-gray-700 font-normal text-lg md:text-xl lg:text-2xl max-w-2xl">
            Shaurya Foundation Trust (SFT) is a non-profit organization
            dedicated to transforming the lives of individuals with special
            needs by providing a holistic approach to education, life skills,
            and community integration.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4 md:mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#4D2C5E] rounded-xl p-2 md:p-3 lg:p-2.5 lg:w-12 lg:h-12 shadow-sm flex items-center justify-center">
                <Image
                  src="/jigsaw.png"
                  alt="Fun Learning Experts"
                  width={32}
                  height={32}
                  className="object-contain lg:w-8 lg:h-8"
                />
              </div>
              <span className="text-[#0A3470] text-lg md:text-xl lg:text-lg xl:text-2xl xl:font-semibold whitespace-nowrap">
                Fun Learning Experts
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#4D2C5E] rounded-xl p-2 md:p-3 lg:p-2.5 lg:w-12 lg:h-12 shadow-sm flex items-center justify-center">
                <Image
                  src="/hearts.png"
                  alt="Easily Accessible"
                  width={32}
                  height={32}
                  className="object-contain lg:w-8 lg:h-8"
                />
              </div>
              <span className="text-[#0A3470] text-lg md:text-xl lg:text-lg xl:text-2xl xl:font-semibold whitespace-nowrap">
                Easily Accessible
              </span>
            </div>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-[#FDF8F1] px-4 py-2 md:px-6 md:py-3 lg:px-4 lg:py-2.5 rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#333] text-lg md:text-xl lg:text-lg xl:text-2xl xl:font-semibold">
                Learn
              </span>
              <ArrowUpRight
                strokeWidth={3}
                size={20}
                className="md:w-6 md:h-6 lg:w-5 lg:h-5"
              />
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/about-us-section.png"
            alt="Girl Working on Laptop"
            width={500}
            height={400}
            className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </section>

      {/* Leaders of Change Section */}
      <section className="mb-10 md:mb-14 xl:mb-20">
        <div className="text-center mb-16">
          <h2 className="text-[80px] font-extrabold text-[#252525] leading-none mb-6">
            Leaders Of Change
          </h2>
          <p className="text-[32px] text-gray-700">
            Achieving self-sufficiency through skill-based employment.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8 xl:gap-12">
          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center">
            <div className="w-[200px] h-[200px] mb-4 rounded-full bg-[#E8EFFF] flex items-center justify-center">
              <Image
                src="/leader-1.png"
                alt="Leader 1"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#252525] mb-1">
              Name Surname
            </h3>
            <p className="text-gray-600">Position</p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center">
            <div className="w-[200px] h-[200px] mb-4 rounded-full bg-[#E8EFFF] flex items-center justify-center">
              <Image
                src="/leader-2.png"
                alt="Leader 2"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#252525] mb-1">
              Name Surname
            </h3>
            <p className="text-gray-600">Position</p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center">
            <div className="w-[200px] h-[200px] mb-4 rounded-full bg-[#E8EFFF] flex items-center justify-center">
              <Image
                src="/leader-1.png"
                alt="Leader 3"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#252525] mb-1">
              Name Surname
            </h3>
            <p className="text-gray-600">Position</p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center">
            <div className="w-[200px] h-[200px] mb-4 rounded-full bg-[#E8EFFF] flex items-center justify-center">
              <Image
                src="/leader-2.png"
                alt="Leader 4"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#252525] mb-1">
              Name Surname
            </h3>
            <p className="text-gray-600">Position</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-8 lg:mt-20 xl:mt-24 mb-8 md:mb-12 lg:mb-16 xl:mb-20 flex justify-center">
        <div className="flex items-center gap-48">
          <div className="flex items-start">
            <div className="w-1 h-20 bg-[#252525] mr-4"></div>
            <div className="flex items-baseline">
              <span className="text-[90px] font-bold text-[#252525] leading-none">
                100
              </span>
              <span className="text-[90px] font-bold text-[#252525] leading-none">
                +
              </span>
            </div>
            <div className="mt-8 ml-2">
              <span className="text-[22px] text-[#252525] font-medium leading-tight block">
                talented
              </span>
              <span className="text-[22px] text-[#252525] font-medium leading-tight block">
                teammates
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-1 h-20 bg-[#252525] mr-4"></div>
            <span className="text-[90px] font-bold text-[#252525] leading-none">
              48
            </span>
            <div className="mt-8 ml-2">
              <span className="text-[22px] text-[#252525] font-medium leading-tight block">
                successful
              </span>
              <span className="text-[22px] text-[#252525] font-medium leading-tight block">
                projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Updates */}
      <section className="bg-[#FFCFD6] rounded-xl p-12 mb-10 md:mb-14 xl:mb-20">
        <h2 className="text-[80px] font-bold mb-6">Our Latest News</h2>
        <p className="text-xl mb-8">Achieving self-sufficiency through skill-based employment.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#E1EDFF] rounded-3xl p-8 relative min-h-[500px] 2xl:min-h-[700px] overflow-hidden">
              <span className="text-[#ffffff] px-3 py-1 bg-[#252B61] rounded-none text-sm font-medium uppercase mb-4 inline-block">#SFT TRIUMPH</span>
              <div className="absolute top-6 right-6 w-16 h-16">
              <Image 
                src="/event-badge.png" 
                alt="Event" 
                fill
                className="object-contain"
              />
            </div>
            <div className="relative z-10 mt-4 2xl:mt-12">
              <h3 className="text-[#252B61] text-4xl font-semibold mb-6">Inclusivity Sensitization</h3>
              <p className="text-[#252B61] text-lg">
                A sneak peak of Training workshop for Anganwadi workers at SFT palwal campus. It was.....
              </p>
            </div>
           
            <div className="absolute bottom-0 right-0 w-[45%] h-[45%] md:w-[40%] md:h-[40%] 2xl:w-[70%] 2xl:h-[70%]">
              <Image 
                src="/wing-icon.png" 
                alt="Wing Icon" 
                fill
                className="object-contain"
              />
            </div>
            <button className="absolute bottom-8 left-8 bg-white text-[#252B61] px-6 py-3 rounded-full font-medium flex items-center gap-2 z-20">
              Show Event
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#16AB59] rounded-3xl p-8 relative min-h-[500px] 2xl:min-h-[700px] overflow-hidden">
              <span className="text-black md:text-sm px-3 py-1 bg-gray-100 rounded-none font-medium uppercase mb-4 inline-block">#SFT TRAININGS</span>
              <div className="absolute top-6 right-6 w-16 h-16">
              <Image 
                src="/event-badge.png" 
                alt="Event" 
                fill
                className="object-contain"
              />
            </div>
            <div className="relative z-10 mt-4 2xl:mt-12">
              <h3 className="text-[#FDF8F1] text-4xl font-semibold mb-6">Global Autism Project</h3>
              <p className="text-[#FDF8F1] text-lg">
                A sneak peak of Training workshop for Anganwadi workers at SFT palwal campus. It was.....
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-[45%] h-[45%] md:w-[40%] md:h-[40%] 2xl:w-[70%] 2xl:h-[70%]">
              <Image 
                src="/autism-ribbon.png" 
                alt="Autism Ribbon" 
                fill
                className="object-contain"
              />
            </div>
            <button className="absolute bottom-8 left-8 bg-white text-[#000000] px-6 py-3 rounded-full font-medium flex items-center gap-2 z-20">
              Show Event
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FF7715] rounded-3xl p-8 relative min-h-[500px] 2xl:min-h-[700px] overflow-hidden">
              <span className="text-[#252B61] px-3 py-1 bg-gray-100 rounded-none md:text-sm font-medium uppercase mb-4 inline-block">#SFT TRAININGS</span>
              <div className="absolute top-6 right-6 w-16 h-16">
              <Image 
                src="/event-badge.png" 
                alt="Event" 
                fill
                className="object-contain"
              />
            </div>
            <div className="relative z-10 mt-4 2xl:mt-12">
              <h3 className="text-[#252B61] text-4xl font-semibold mb-6">Sing And Paint</h3>
              <p className="text-[#252B61] text-lg">
                A sneak peak of Training workshop for Anganwadi workers at SFT palwal campus. It was.....
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-[45%] h-[45%] md:w-[40%] md:h-[40%] 2xl:w-[70%] 2xl:h-[70%]">
              <Image 
                src="/art-display.png" 
                alt="Art Display" 
                fill
                className="object-contain"
              />
            </div>
            <button className="absolute bottom-8 left-8 bg-white text-[#252B61] px-6 py-3 rounded-full font-medium flex items-center gap-2 z-20">
              Show Event
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="text-center py-12 mb-10">
        <h2 className="text-6xl font-extrabold">Awards</h2>
        <p className="text-gray-600 text-xl font-semibold mt-2">
          There are more than 100 games in our portfolio, 80 of them in active
          operation.
        </p>

        <div className="mt-8 flex flex-wrap lg:flex-nowrap justify-center gap-14">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative w-52 h-52 lg:w-44 lg:h-44 xl:w-52 xl:h-52 flex items-center justify-center rounded-3xl bg-white shadow-md border border-gray-200 
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1.5 
                        before:rounded-t-3xl ${award.borderColor}`}
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={100}
                height={100}
                className="object-contain lg:w-20 lg:h-20 xl:w-24 xl:h-24"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
