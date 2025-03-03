"use client";

import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const images = Array.from({ length: 10 }, (_, i) => `/about/${i + 1}.png`);

const firstRow = [
  {
    body: "ISKCON",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    body: "DHARAM PAL SATYA PAL GROUP",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    body: "MH 1",
    img: "https://avatar.vercel.sh/john",
  },
  {
    body: "SAGAR RATNA",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "SATA VIKAS",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "NIPPON",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "SELECT CITY MALL",
    img: "https://avatar.vercel.sh/james",
  },
];

const secondRow = [
  {
    body: "MAN TAN MALL",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    body: "DELHI HIGH COURT CANTEEN",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    body: "NESTLE + Atypical Advantage",
    img: "https://avatar.vercel.sh/john",
  },
  {
    body: "NATHU'S",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "MODERN SCHOOL",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    body: "STEP BY STEP SCHOOL",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "SANSKRITI SCHOOL",
    img: "https://avatar.vercel.sh/james",
  },
  {
    body: "GENESIS GLOBAL SCHOOL",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "AMERICAN EMBASSY SCHOOL",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "VIROHAN",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "MCX",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "WORLD BANK",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    body: "INTERTECH",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const gridStyles = [
  "col-span-3 row-span-2 col-start-1",
  "col-span-4 row-span-2 col-start-4",
  "col-span-4 row-span-2 col-start-8",
  "col-span-4 row-span-2 col-start-12",
  "row-span-2 col-start-16",
  "col-span-2 row-span-2 col-start-1 row-start-3",
  "col-span-4 row-span-2 col-start-3 row-start-3",
  "col-span-4 row-span-2 col-start-7 row-start-3",
  "col-span-4 row-span-2 col-start-11 row-start-3",
  "col-span-2 row-span-2 col-start-15 row-start-3",
];

const ReviewCard = ({ img, body }: { img: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
      </div> */}
      <h3 className="mt-2 text-center items-center justify-center font-semibold text-lg">
        {body}
      </h3>
    </figure>
  );
};

export default function About() {
  return (
    <main className="px-4 sm:px-8 lg:px-24">
      <section className="relative w-full bg-[#C7D0FF] border border-black shadow-md rounded-[42px] px-6 sm:px-12 md:px-16 lg:px-24 pt-8 sm:pt-12 md:pt-16 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[4vw] uppercase tracking-tight text-[#222223] leading-tight">
          About <span className="font-extrabold">Shaurya</span>
        </h1>

        {/* Illustration */}
        <img
          src="/about-hero.png"
          alt="Illustration"
          className="w-full max-w-[1300px] h-auto mt-4 sm:mt-6"
        />

        {/* CTA Button - Positioned Bottom */}
        <div className="w-full mx-auto flex justify-between items-center mt-6 sm:mt-0 sm:absolute sm:bottom-10 px-4 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-0">
          {/* Left: Support Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-2 bg-white px-3 sm:px-5 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg font-medium border border-black rounded-full hover:bg-gray-200 transition whitespace-nowrap">
              Support Shaurya
            </button>
            <button className="bg-white p-2 sm:p-3 rounded-full border border-black hover:bg-gray-200 transition">
              <ArrowRight size={16} className="sm:hidden" />
              <ArrowRight size={20} className="hidden sm:block" />
            </button>
          </div>

          {/* Right: Play Button */}
          <button className="bg-white p-2 sm:p-3 rounded-full border border-black hover:bg-gray-200 transition">
            <Play size={18} className="sm:hidden" />
            <Play size={24} className="hidden sm:block" />
          </button>
        </div>
      </section>

      {/* Who we are? */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-8 sm:py-10">
        {/* Title */}
        <h2 className="text-[10vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1] mb-6 lg:mb-0">
          <span className="font-extralight">Who We</span> <br />{" "}
          <span className="font-extrabold">Are?</span>
        </h2>

        {/* Description */}
        <p className="w-full lg:max-w-[50%] text-[4vw] sm:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* image - bento grid */}
      <section className="w-[calc(100%-40px)] mx-auto my-10">
        <div className="grid grid-cols-16 grid-rows-4 gap-4">
          {images.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl ${gridStyles[index]}`}
            >
              <Image
                src={src}
                alt={`Collage image ${index + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Text columns section */}
      <section className="pb-10 sm:pb-15 md:pb-20">
        <div className="px-6 sm:px-10 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Our programs are designed to develop functional skills, foster
            creativity, and instill a sense of responsibility in our students.
            We believe that education should be a joyful pursuit, one that
            ignites a lifelong love of learning. Empowerment Through Skills
            Development: We move beyond traditional welfare approaches by
            focusing on empowerment. Our programs are tailored to equip
            individuals with the skills they need to navigate the challenges of
            daily life, whether at home, at work, or in the community. We aim to
            build confidence and self-reliance, helping our trainees become
            independent adults.
          </p>

          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Creating Inclusive Opportunities: SFT is dedicated to opening doors
            for persons with disabilities, ensuring they have access to the same
            opportunities as others. Through our initiatives, we aim to break
            down barriers and create pathways to employment, personal growth,
            and community involvement. Dignity, Not Charity: Our philosophy is
            rooted in respect and inclusion. We seek to change societal
            perceptions, shifting the narrative from one of charity to one of
            dignity. We want to change the image of persons with disabilities
            from being passive recipients of help to active contributors to
            society.
          </p>
        </div>
      </section>

      {/* our vision */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1] mb-4 lg:mb-0">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Vision</span>
        </h2>

        {/* Right: Description */}
        <p className="w-full lg:max-w-[50%] text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* Vision Image Grid */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto pb-12 space-y-4">
        {/* Large Main Image */}
        <div className="w-full h-[400px] relative overflow-hidden rounded-[40px] border">
          <Image
            src="/about/vision-1.png"
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        {/* Smaller Images - Mobile (Stacked), Large Screen (Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4">
          <div className="relative overflow-hidden rounded-[40px] border h-[250px] sm:h-[300px] md:h-[300px] md:flex-1">
            <Image
              src="/about/vision-2.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[40px] border h-[250px] sm:h-[300px] md:h-[300px] md:flex-1">
            <Image
              src="/about/vision-3.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[40px] border h-[250px] sm:h-[300px] md:h-[300px] md:flex-1">
            <Image
              src="/about/vision-4.png"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Text columns section */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="px-6 sm:px-10 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            Our vision is to create a world where individuals with special needs
            are empowered to live independently and contribute meaningfully to
            society. At SFT, we envision a future where every person, regardless
            of their abilities, has the opportunity to live with dignity,
            achieve economic independence, and find purpose in their daily
            lives.
          </p>

          <p className="leading-[1.6] tracking-wide text-justify font-normal">
            We are driven by the belief that with the right support, individuals
            with special needs can lead fulfilling lives, becoming active,
            respected members of their communities
          </p>
        </div>
      </section>

      {/* our mission */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1] mb-4 lg:mb-0">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Mission</span>
        </h2>

        {/* Right: Description */}
        <p className="w-full lg:max-w-[50%] text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our vision is to create a world where individuals with special needs
          are empowered to live independently and contribute meaningfully to
          society.
        </p>
      </section>

      {/* mission image */}
      <section className="w-[calc(100%-40px)] lg:w-[calc(100%-80px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] mx-auto my-10">
        <Image
          src="/about/mission-image.png"
          alt="about"
          width={1200}
          height={500}
          className="w-full h-auto border lg:rounded-[40px] sm:rounded-[20px] md:rounded-[30px]"
        />
      </section>

      {/* paragraph section */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto">
        <div className="px-6 sm:px-10 md:px-16 mx-auto items-center text-justify tracking-wide sm:tracking-wider md:tracking-widest">
          <p className="my-5 sm:my-6 md:my-8 lg:my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10 text-sm sm:text-base">
            Excellence in Functional Education: At SFT, we are committed to
            providing a well-rounded education that goes beyond academics. Our
            programs are designed to develop functional skills, foster
            creativity, and instill a sense of responsibility in our students.
            We believe that education should be a joyful pursuit, one that
            ignites a lifelong love of learning.
          </p>

          <p className="my-5 sm:my-6 md:my-8 lg:my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10 text-sm sm:text-base">
            Empowerment Through Skills Development: We move beyond traditional
            welfare approaches by focusing on empowerment. Our programs are
            tailored to equip individuals with the skills they need to navigate
            the challenges of daily life, whether at home, at work, or in the
            community. We aim to build condence and self-reliance, helping our
            trainees become independent adults.
          </p>

          <p className="my-5 sm:my-6 md:my-8 lg:my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10 text-sm sm:text-base">
            Creating Inclusive Opportunities: SFT is dedicated to opening doors
            for persons with disabilities, ensuring they have access to the same
            opportunities as others. Through our initiatives, we aim to break
            down barriers and create pathways to employment, personal growth,
            and community involvement.
          </p>

          <p className="my-5 sm:my-6 md:my-8 lg:my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10 text-sm sm:text-base">
            Dignity, Not Charity: Our philosophy is rooted in respect and
            inclusion. We seek to change societal perceptions, shifting the
            narrative from one of charity to one of dignity. We want to change
            the image of persons with disabilities from being passive recipients
            of help to active contributors to society.
          </p>
        </div>
      </section>

      {/* our programs */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Left: Title */}
        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1] mb-4 lg:mb-0">
          <span className="font-extralight">Our</span> <br />{" "}
          <span className="font-extrabold">Programs</span>
        </h2>

        {/* Right: Description */}
        <p className="w-full lg:max-w-[50%] text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our comprehensive programs are designed to support individuals with
          special needs through every stage of their journey towards
          independence and meaningful participation in society.
        </p>
      </section>

      {/* programs image */}
      <section className="w-[calc(100%-40px)] mx-auto my-10">
        <Link
          href="/admission"
          className="relative block group overflow-hidden rounded-[40px] cursor-pointer"
        >
          <Image
            src="/about/program-image.png"
            alt="about"
            width={1200}
            height={500}
            className="w-full h-auto border rounded-[40px] transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2C438A]/80 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <h3 className="text-[#F0DA69] text-4xl font-bold mb-4 transform translate-y-10 transition-transform duration-500 group-hover:translate-y-0">
              Our Programs
            </h3>
            <p className="text-white text-lg max-w-[600px] text-center px-8 transform translate-y-10 transition-transform duration-500 group-hover:translate-y-0">
              Discover our comprehensive programs designed to empower
              individuals with special needs through education, life skills, and
              community integration.
            </p>
          </div>
        </Link>
      </section>

      {/* our partners */}
      <section className="w-[calc(100%-20px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-40px)] mx-auto bg-white flex flex-col lg:flex-row items-start justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10 gap-6">
        {/* Left: Title */}
        <h2 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] uppercase tracking-tight text-[#222222] leading-[1]">
          <span className="font-extralight">Our</span> <br />
          <span className="font-extrabold">Partner-ships</span>
        </h2>

        {/* Right: Description */}
        <p className="w-full lg:max-w-[50%] text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[1.75vw] text-[#222222] opacity-75 leading-snug tracking-wide">
          Our inclusive partnerships are making a substantial and positive
          difference in supporting special needs individuals as they navigate
          their journey towards greater independence and self-sufficiency.
        </p>
      </section>

      {/* Marquee-magic UI */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-8 lg:mb-16">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.body} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.body} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </main>
  );
}
