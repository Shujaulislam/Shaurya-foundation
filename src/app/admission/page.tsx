"use client"

import { Activity, ArrowRight, BarChart, CloudRain, MessageCircle, Pencil, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const image = {
  rotate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 8,
      ease: "linear",
    },
  },
};

export default function Admission() {
  return (
    <main className="px-4 lg:px-24">
      {/* HERO */}
      <section className="relative w-full min-h-[600px] bg-[#2C438A] rounded-[40px] px-6 lg:rounded-[90px] lg:px-24 pt-16 overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10 lg:max-w-[720px]">
          {/* Tags Container */}
          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <button className="bg-[#E7C2D4] p-2.5 rounded-full">
                <Activity className="text-[#2C438A]" size={20} />
              </button>
              <p className="text-[#C6DEFD] text-[16px] lg:text-[18px] font-medium">
                Easy Learning
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#A3DAC2] p-2.5 rounded-full">
                <CloudRain className="text-[#2C438A]" size={20} />
              </button>
              <p className="text-[#C6DEFD] text-[16px] lg:text-[18px] font-medium">
                Fun Learning
              </p>
            </div>
          </div>
          {/* Title with Play Button */}
          <div className="flex items-center gap-5">
            <h1 className="text-[50px] lg:text-[100px] uppercase text-[#C6DEFD] leading-none tracking-tight font-bold">
              Our
            </h1>
            <button className="bg-white p-3.5 rounded-full">
              <Play className="text-[#F0DA69] fill-[#F0DA69]" size={24} />
            </button>
          </div>
          {/* Subtitle */}
          <h2 className="text-[60px] lg:text-[120px] -mt-6 uppercase text-[#F0DA69] font-extrabold leading-none tracking-tight mb-8">
            Programs
          </h2>
          {/* Description Text */}
          <p className="text-[#C6DEFD] text-[16px] lg:text-[18px] leading-[1.8] w-full font-semibold">
            A Non-Profit Transforming The Lives Of Individuals With Special
            Needs Through Holistic Education, Life Skills, And Community
            Integration.
          </p>
        </div>

        {/* Hero Image - Positioned Bottom Right */}
        <div className="absolute bottom-0 right-[-15px] w-[90%] opacity-30 lg:right-[-35px] lg:w-[50%] lg:opacity-100 h-[100%]">
          {/* Increased width & height */}
          <Image
            src="/admissions/hero.png"
            alt="hero-image"
            width={1900}
            height={1600}
            className="w-full h-full object-cover object-bottom"
            priority
          />
        </div>

        {/* CTA Buttons - Bottom Left */}
        <div className="absolute bottom-12 left-6 lg:left-24 flex items-center gap-3">
          <button className="flex items-center gap-4 bg-[#FFCFD6] px-8 py-4 text-[#2C438A] text-[17px] font-semibold rounded-full hover:bg-opacity-90 transition">
            Support Shaurya
          </button>
          <button className="bg-[#FFCFD6] p-4 rounded-full hover:bg-opacity-90 transition">
            <ArrowRight className="text-[#2C438A]" size={20} />
          </button>
        </div>
      </section>

      {/* ENABLED LIVING */}
      <section
        className="relative w-full min-h-[600px] bg-[#C7D0FF] rounded-[40px] mt-20 px-6 py-20
        flex flex-col lg:flex-row lg:rounded-[90px] lg:px-16 items-center justify-between overflow-hidden gap-10"
      >
        {/* Left Side - Stacked Images */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* Centered Dotted Background */}
          <div className="absolute w-[500px] h-[500px] bg-[url('/admissions/dotted-bg.png')] bg-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Stacked Images */}
          <div className="relative w-[350px] h-[280px]">
            <Image
              src="/admissions/img-1.png"
              alt="Reflection time"
              width={300}
              height={250}
              className="absolute left-[-60px] top-[30px] rotate-[-10deg] z-10 transform hover:scale-125 transition-transform ease-linear duration-500"
            />
            <Image
              src="/admissions/img-2.png"
              alt="Check-in"
              width={300}
              height={250}
              className="absolute left-[40px] top-[-73px] rotate-[5deg] z-20 transform hover:scale-150 transition-transform ease-linear duration-500"
            />
            <Image
              src="/admissions/img-3.png"
              alt="Check-out"
              width={300}
              height={250}
              className="absolute right-[-70px] top-[60px] rotate-[12deg] z-30 transform hover:scale-110 transition-transform ease-linear duration-500"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left">
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-[#121212] leading-tight">
            Enabled Living
          </h2>
          <p className="text-[#121212] text-[16px] lg:text-[20px] leading-[1.8] max-w-none">
            SFT addresses the concerns of parents and neurodiverse young adults
            by offering community living solutions through our Enabled Living
            Program (ELP). This initiative includes service apartments, buddy
            apartments, and bungalows that provide varying levels of assistance
            while promoting independent living. These facilities are fully
            managed by SFT and come with common amenities like leisure centers,
            dining facilities, and medical support. This program is designed to
            ensure that neurodiverse individuals can live independently with the
            support they need, even after their parents are no longer around.
          </p>

          {/* Learn More Button - Bottom Right Aligned */}
          <div className="flex justify-end">
            <button
              className="px-6 py-3 border-2 border-black border-solid text-black font-semibold rounded-[12px] 
        hover:bg-black hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* BIG SECTION */}
      <section className="relative w-full h-auto bg-[#BFF9EA] mt-20 px-6 lg:px-16 py-20">
        {/* DSW SECTION */}
        <section
          className="relative rounded-[30px] mt-20 px-6 py-20
          flex flex-col lg:flex-row lg:rounded-[42px] lg:px-16 items-center justify-between overflow-hidden gap-10"
        >
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left">
            <h2 className="text-[36px] lg:text-[48px] font-extrabold text-[#121212] leading-tight">
              Disability Support Worker (DSW) Training
            </h2>
            <p className="text-[#121212] text-[16px] lg:text-[20px] leading-[1.8] max-w-none">
              Recognizing the growing need for professional caregivers, SFT has
              developed a comprehensive DSW training program. This program
              trains individuals to provide essential support to persons with
              disabilities, helping them with daily activities, personal care,
              and professional tasks. The DSWs play a crucial role in the
              Independent Living Program and Long-Term Care Giving Program,
              bridging the gap between the community and those with high support
              needs. Through this initiative, we aim to create a workforce of
              trained professionals who can support not only individuals with
              disabilities but also the elderly and others in need of care.
            </p>

            {/* Learn More Button - Bottom Right Aligned */}
            <div className="flex">
              <button
                className="px-6 py-3 border-2 border-black border-solid text-black font-semibold rounded-[12px] 
        hover:bg-black hover:text-white transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Stacked Images */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Centered Circular Dotted Background */}
            <div className="absolute w-[500px] h-[500px] bg-[url('/admissions/dotted-circle-bg.png')] bg-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Stacked Images */}
            <div className="relative w-[400px] h-[400px] ">
              {/* Base Chat Image */}
              <Image
                src="/admissions/chat.png"
                alt="Chat background"
                width={500}
                height={500}
                className="absolute left-0 top-[30px] z-0 transform hover:scale-105 transition-transform"
              />

              {/* Bean Image - Middle Layer */}
              <Image
                src="/admissions/bean.png"
                alt="Mr Bean"
                width={120}
                height={100}
                className="absolute right-[-30px] bottom-[110px] z-10 transform hover:scale-125 transition-transform"
              />

              {/* Hands and Music Node Container - Top Layer */}
              <div className="absolute left-[50px] bottom-[20px] z-20 flex gap-4">
                <Image
                  src="/admissions/node.png"
                  alt="Music node"
                  width={100}
                  height={100}
                  className=" pt-16  transform hover:scale-105 transition-transform"
                />
                <Image
                  src="/admissions/hands.png"
                  alt="Hands"
                  width={220}
                  height={150}
                  className=" transform hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ASSISTED EMPLOYEMENT PROJECTS */}
        <section
          className="relative rounded-[30px] mt-20 px-6 py-20
          flex flex-col-reverse lg:flex-row lg:rounded-[42px] lg:px-16 items-center justify-between overflow-hidden gap-10"
        >
          {/* Left Side - Stacked Images */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Dotted Background */}
            <div className="absolute w-[500px] h-[500px] bg-[url('/admissions/dotted-flower-bg.png')] bg-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Rectangle Whiteboard-Like Image */}
            <div className="relative w-[400px] h-[280px]">
              <Image
                src="/admissions/rectangle-bg.png"
                alt="Whiteboard"
                width={400}
                height={280}
                className="absolute left-0 top-0 rotate-[-10deg] z-10"
              />

              {/* Floating Icons */}
              <Image
                src="/admissions/miro.png"
                alt="Miro"
                width={110}
                height={110}
                className="absolute top-[-40px] left-[200px] rotate-[10deg] z-20 transform hover:scale-125 transition-transform"
              />
              <Image
                src="/admissions/mural.png"
                alt="Mural"
                width={110}
                height={110}
                className="absolute top-[80px] left-[50px] rotate-[5deg] z-30 transform hover:scale-125 transition-transform"
              />
              <Image
                src="/admissions/youtube.png"
                alt="YouTube"
                width={110}
                height={110}
                className="absolute bottom-[-35px] left-[120px] rotate-[-8deg] z-20 transform hover:scale-125 transition-transform"
              />
              <Image
                src="/admissions/drive.png"
                alt="Google Drive"
                width={110}
                height={110}
                className="absolute bottom-[70px] right-[80px] rotate-[5deg] z-20 transform hover:scale-125 transition-transform"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left">
            <h2 className="text-[36px] lg:text-[48px] font-extrabold text-[#121212] leading-tight">
              Assisted Employment Projects
            </h2>
            <p className="text-[#121212] text-[16px] lg:text-[20px] leading-[1.8] max-w-none">
              Employment is a key focus area for SFT. We are actively working to
              create more job opportunities for neurodiverse individuals through
              corporate partnerships. Our Assisted Employment Projects span a
              range of industries, including packaging, manufacturing, food
              services, assembling, corporate gifting, and digital work. These
              projects provide meaningful employment opportunities that allow
              individuals with special needs to gain financial independence and
              contribute to society. Our goal is to increase employment rates
              among neurodiverse youth by at least %25.
            </p>

            {/* Learn More Button - Bottom Right Aligned */}
            <div className="flex justify-end">
              <button
                className="px-6 py-3 border-2 border-black border-solid text-black font-semibold rounded-[12px] 
        hover:bg-black hover:text-white transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* INCLUSIVE ECOSYTEM */}
      <section
        className="relative w-full min-h-[800px] bg-[#FFD8AA] rounded-[40px] mt-20 mb-20 px-6 py-20 
        flex flex-col lg:flex-row lg:rounded-[90px] lg:px-16 items-center justify-between overflow-hidden gap-10"
      >
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left">
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-[#121212] leading-tight">
            Inclusive Ecosystem
          </h2>
          <p className="text-[#121212] text-[16px] lg:text-[20px] leading-[1.8] max-w-none">
            SFT is committed to fostering an inclusive ecosystem through a
            variety of initiatives. We conduct sensitization workshops and
            events for school children, youth, and corporate employees to
            promote understanding and acceptance of neurodiversity. Our goal is
            to reach out to 10,000 school children and 10,000 youth, helping
            them develop a mindset of inclusivity from an early age. We also
            plan to organize 30 corporate inclusivity events to encourage
            businesses to adopt more inclusive practices. By building an
            inclusive ecosystem, we aim to create a society where everyone is
            valued and supported.
          </p>

          {/* Learn More Button - Bottom Right Aligned */}
          <div className="flex">
            <button
              className="px-6 py-3 border-2 border-black text-black font-semibold rounded-[12px] 
                      hover:bg-black hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* Dotted Background Shape */}
          <div className="absolute w-[450px] h-[450px] bg-[url('/admissions/inclusive-dotted-bg.png')] bg-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Center Circle Image */}
          <div className="relative w-[350px] h-[350px] flex items-center justify-center">
            <Image
              src="/admissions/circle.png"
              alt="Circle Background"
              width={400}
              height={400}
              className="object-contain"
            />

            {/* Stacked Images on Top of Circle */}
            <motion.div
              className="absolute w-full h-full flex items-center justify-center"
              // animate={{rotate: 360}}
              // transition={{duration: 10, repeat: Infinity, ease: "linear"}}
              // style={{transformOrigin: "center"}}
            >
              {/* Message Bubble */}
              <Image
                src="/admissions/message.png"
                alt="Message Icon"
                width={100}
                height={100}
                className="absolute top-[20px] left-[20px]"
              />

              {/* Pencil */}
              <Image
                src="/admissions/pencil.png"
                alt="Pencil Icon"
                width={100}
                height={100}
                className="absolute -right-[30px] top-[100px]"
              />

              {/* Bar Chart */}
              <Image
                src="/admissions/bar-chart.png"
                alt="Bar Chart Icon"
                width={100}
                height={100}
                className="absolute bottom-[20px] left-[20px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOREM IPSUM */}
      {/* <section
        className="relative w-full min-h-[600px] bg-[#FFD5D5] rounded-[42px] mt-20 px-16 py-20
        flex items-center justify-between overflow-hidden"
      >
        Left Side - Image Section
        <div className="relative w-1/2 flex justify-center">
          Dotted Swirl Background (Bottom Layer)
          <div className="absolute w-[400px] h-[400px] bg-[url('/admissions/dotted-swirl-bg.png')] bg-contain bg-no-repeat left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

          Whiteboard/Rectangle Background (Middle Layer)
          <div className="relative w-[380px] h-[260px] flex items-center justify-center z-10">
            <Image
              src="/admissions/rectangle-bg.png"
              alt="Whiteboard"
              width={380}
              height={260}
            />
          </div>

          Circular Avatars (Top Layer)
          <div className="absolute w-[420px] h-[380px] z-20">
            <Image
              src="/admissions/avatar_purple.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute top-[-10px] left-[170px]"
            />
            <Image
              src="/admissions/avatar_blue.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute top-[50px] left-[280px]"
            />
            <Image
              src="/admissions/avatar_green.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute top-[150px] left-[350px]"
            />
            <Image
              src="/admissions/avatar_red.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute bottom-[50px] left-[340px]"
            />
            <Image
              src="/admissions/avatar_orange.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute bottom-[100px] left-[220px]"
            />
            <Image
              src="/admissions/avatar_yellow.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute bottom-[120px] left-[90px]"
            />
            <Image
              src="/admissions/avatar_brown.webp"
              alt="Avatar"
              width={60}
              height={60}
              className="absolute bottom-[40px] left-[10px]"
            />
          </div>
        </div>

        Right Side - Text Content
        <div className="w-1/2 flex flex-col space-y-6 text-left">
          <h2 className="text-[48px] font-extrabold text-[#121212] leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-[#121212] text-[20px] leading-[1.8] max-w-none">
            Nullam congue sollicitudin dui, a egestas odio molestie id.
            Curabitur dictum aliquet mi at lacinia. In pulvinar, quam sed
            tristique pulvinar, dolor mauris dictum justo, sed dignissim
            nibherat vel quam. Etiam dictum tempor consectetur. Nunc aliquet
            eros ut tellus porttitor, ut aliquam urna lacinia.
          </p>

          Learn More Button - Bottom Right Aligned
          <div className="flex justify-end">
            <button
              className="px-6 py-3 border-2 border-black border-solid text-black font-semibold rounded-[12px] 
        hover:bg-black hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
