'use client'

import { Parallax } from '../Parallax/Parallax'
import Image from 'next/image'

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one customized training sessions with expert trainers",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg",
    price: "From RWF 30,000/session"
  },
  {
    title: "Group Classes",
    description: "High-energy group workouts including HIIT, Cardio, and Strength Training",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.06.jpeg",
    price: "From RWF 20,000/class"
  },
  {
    title: "Weight Training",
    description: "Structured weight training programs for muscle building and toning",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.07.jpeg",
    price: "From RWF 25,000/month"
  },
  {
    title: "Cardio Sessions",
    description: "State-of-the-art cardio equipment and guided cardio workouts",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.08.jpeg",
    price: "From RWF 15,000/month"
  }
]

export const Programs = () => {
  return (
    <section id="programs" className="py-20 relative overflow-visible">
      {/* Top Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-gray-100/50 to-white" />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative w-full pt-[60%]"> {/* This creates a 60% aspect ratio container */}
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index === 0}
                  quality={75}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{program.description}</p>
                <p className="text-red-600 font-semibold">{program.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-medium 
            hover:bg-red-700 transition-all duration-300 text-sm tracking-wider hover:scale-105"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </section>
  )
} 