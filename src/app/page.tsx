import Image from "next/image";

export default function Home() {
  return (
    <main className="px-24">
  {/* Hero Section with Image Overlay */}
  <section className="relative w-full mb-16">
    <div className="relative w-full h-[600px] rounded-[41px] overflow-hidden">
      <img 
        src="/placeholder-hero.jpg" 
        alt="Shaurya team" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-[80px] font-bold mb-4">SHAURYA</h1>
        <p className="text-white text-center text-[28px] max-w-[2499px] mb-10">
          A non-profit transforming the lives of individuals with special needs through holistic education, life skills, and community integration.
        </p>
        <div className="flex gap-6 mb-12">
          <button className="bg-white text-[#1F1F1F] text-[20px] font-semibold px-10 py-3 rounded-lg">Know More</button>
          <button className="bg-transparent border-2 border-white text-white text-[20px] font-semibold px-10 py-3 rounded-lg">Support Us</button>
        </div>
        <p className="text-white text-[16px] font-medium mt-20">slide DOWN</p>
      </div>
    </div>
  </section>

  {/* Initiatives/Programs Cards */}
  <section className="mb-16 grid grid-cols-4 gap-4">
    <div className="bg-[#F0DA69] p-6 rounded-[20px]">
      <div className="h-[200px] mb-4">
        <img src="/placeholder-initiative1.jpg" alt="Community Outreach" className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Community Outreach</h3>
      <p className="text-sm opacity-75">Serving communities through education and empowerment initiatives</p>
    </div>
    <div className="bg-[#2C438A] p-6 rounded-[20px] text-white">
      <div className="h-[200px] mb-4">
        <img src="/placeholder-initiative2.jpg" alt="Healthcare Initiatives" className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Healthcare Initiatives</h3>
      <p className="text-sm opacity-75">Providing essential healthcare services to underserved areas</p>
    </div>
    <div className="bg-[#A3DAC2] p-6 rounded-[20px]">
      <div className="h-[200px] mb-4">
        <img src="/placeholder-initiative3.jpg" alt="Inclusivity Sensitization" className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Inclusivity Sensitization</h3>
      <p className="text-sm opacity-75">Creating awareness for inclusive practices in society</p>
    </div>
    <div className="bg-[#FFCFD6] p-6 rounded-[20px]">
      <div className="h-[200px] mb-4">
        <img src="/placeholder-initiative4.jpg" alt="Education Programs" className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Education Programs</h3>
      <p className="text-sm opacity-75">Empowering through knowledge and skill development</p>
    </div>
  </section>

  {/* About Shaurya Section */}
  <section className="relative bg-[#C7D0FF] rounded-[40px] p-16 mb-16">
    <div className="max-w-[1566px]">
      <h2 className="text-[100px] font-bold mb-6">About Shaurya.</h2>
      <p className="text-[28px] opacity-75 mb-16 max-w-[1566px]">
        Shaurya Foundation Trust (SFT) is a non-profit organization dedicated to transforming the lives of individuals with special needs by providing a holistic approach to education, life skills, and community integration.
      </p>
      
      <div className="flex gap-12 mb-16">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <img src="/jigsaw.png" alt="Jigsaw Icon" className="w-[75px] h-[75px]" />
          <span className="text-[30px] font-semibold text-[#474444]">Expand</span>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <img src="/hearts.png" alt="Hearts Icon" className="w-[64px] h-[64px]" />
          <span className="text-[30px] font-semibold text-[#474444]">Support</span>
        </div>
        
        <div className="flex items-center gap-4 bg-[#FDF8F1] p-4 rounded-lg">
          <span className="text-[30px] font-semibold text-[#474444]">Learn More</span>
          <div className="w-[40px] h-[40px] bg-[#222222]"></div>
        </div>
      </div>
    </div>
    
    <div className="absolute right-[140px] top-[160px] w-[1140px] h-[1042px]">
      <img src="/placeholder-about-image.jpg" alt="About Shaurya" className="w-full h-full object-cover rounded-lg" />
    </div>
  </section>

  {/* Leaders of Change Section */}
  <section className="bg-[#91B4FD] rounded-[40px] p-16 mb-16">
    <h2 className="text-[80px] font-bold text-center mb-4">Leaders Of Change</h2>
    <p className="text-[28px] text-center mb-16">Achieving self-sufficiency through skill-based employment.</p>
    
    <div className="grid grid-cols-4 gap-12 mb-16">
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] mb-4 overflow-hidden rounded-full">
          <img src="/placeholder-leader1.jpg" alt="Leader" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold text-xl mb-1">Anita</h3>
        <p className="text-sm text-gray-700">Founder</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] mb-4 overflow-hidden rounded-full">
          <img src="/placeholder-leader2.jpg" alt="Leader" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold text-xl mb-1">Rajesh</h3>
        <p className="text-sm text-gray-700">Director</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] mb-4 overflow-hidden rounded-full">
          <img src="/placeholder-leader3.jpg" alt="Leader" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold text-xl mb-1">Suraj</h3>
        <p className="text-sm text-gray-700">Program Manager</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] mb-4 overflow-hidden rounded-full">
          <img src="/placeholder-leader4.jpg" alt="Leader" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold text-xl mb-1">Meera</h3>
        <p className="text-sm text-gray-700">Communications</p>
      </div>
    </div>
    
    <div className="flex justify-around items-center bg-white py-8 px-6 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold">100+</h3>
        <p className="text-sm">Active Volunteers</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">48</h3>
        <p className="text-sm">Projects Completed</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">12</h3>
        <p className="text-sm">Years of Impact</p>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold">5000+</h3>
        <p className="text-sm">Lives Impacted</p>
      </div>
    </div>
  </section>

  {/* Upcoming Events */}
  <section className="bg-[#FFCFD6] rounded-[40px] p-16 mb-16">
    <h2 className="text-[80px] font-bold mb-6">Upcoming Events</h2>
    <p className="text-[28px] mb-12">Join our upcoming events and be part of the change</p>
    
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="h-[200px] mb-4">
          <img src="/placeholder-event1.jpg" alt="Inclusivity Sensitization" className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="font-semibold text-xl mb-2">Inclusivity Sensitization</h3>
        <p className="text-sm mb-4">Workshops for schools and organizations</p>
        <div className="flex justify-between">
          <span className="text-sm font-medium">24 March, 2025</span>
          <button className="text-sm font-medium">Learn more →</button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="h-[200px] mb-4">
          <img src="/placeholder-event2.jpg" alt="Community Seminar" className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="font-semibold text-xl mb-2">Community Seminar</h3>
        <p className="text-sm mb-4">Fostering dialogue between communities</p>
        <div className="flex justify-between">
          <span className="text-sm font-medium">15 April, 2025</span>
          <button className="text-sm font-medium">Learn more →</button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="h-[200px] mb-4">
          <img src="/placeholder-event3.jpg" alt="One Day Camp" className="w-full h-full object-cover rounded-lg" />
        </div>
        <h3 className="font-semibold text-xl mb-2">One Day Camp</h3>
        <p className="text-sm mb-4">Health checkup and consultation</p>
        <div className="flex justify-between">
          <span className="text-sm font-medium">2 May, 2025</span>
          <button className="text-sm font-medium">Learn more →</button>
        </div>
      </div>
    </div>
  </section>

  {/* Latest News/Updates */}
  <section className="mb-16">
    <h2 className="text-[80px] font-bold mb-6">Our Latest News</h2>
    
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-[#F0DA69] rounded-lg overflow-hidden">
        <div className="h-[240px]">
          <img src="/placeholder-news1.jpg" alt="Inclusivity Sensitization" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">Inclusivity Sensitization</h3>
          <p className="text-sm mb-4">New program launched across 15 schools</p>
          <button className="text-sm font-medium flex items-center">Read more <span className="ml-1">→</span></button>
        </div>
      </div>
      
      <div className="bg-[#A3DAC2] rounded-lg overflow-hidden">
        <div className="h-[240px]">
          <img src="/placeholder-news2.jpg" alt="Global Autism Project" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">Global Autism Project</h3>
          <p className="text-sm mb-4">Partnership with international organizations</p>
          <button className="text-sm font-medium flex items-center">Read more <span className="ml-1">→</span></button>
        </div>
      </div>
      
      <div className="bg-[#FFCFD6] rounded-lg overflow-hidden">
        <div className="h-[240px]">
          <img src="/placeholder-news3.jpg" alt="Drug Free Youth Initiative" className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">Drug Free Youth</h3>
          <p className="text-sm mb-4">New awareness campaign reaches thousands</p>
          <button className="text-sm font-medium flex items-center">Read more <span className="ml-1">→</span></button>
        </div>
      </div>
    </div>
  </section>

  {/* Awards */}
  <section className="mb-20">
    <h2 className="text-[60px] font-bold mb-8">Awards</h2>
    
    <div className="flex justify-between items-center">
      <img src="/placeholder-award1.png" alt="Award" className="h-24" />
      <img src="/placeholder-award2.png" alt="Award" className="h-24" />
      <img src="/placeholder-award3.png" alt="Award" className="h-24" />
      <img src="/placeholder-award4.png" alt="Award" className="h-24" />
      <img src="/placeholder-award5.png" alt="Award" className="h-24" />
    </div>
  </section>
</main>
  );
}
