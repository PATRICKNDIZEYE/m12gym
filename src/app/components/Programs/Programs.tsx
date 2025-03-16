'use client'

import { Parallax } from '../Parallax/Parallax'
import Image from 'next/image'

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one customized training sessions with expert trainers",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg",
    price: "From RWF 25,000/session"
  },
  {
    title: "Group Classes",
    description: "High-energy group workouts including HIIT, Cardio, and Strength Training",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.08.jpeg",
    price: "From RWF 20,000/class"
  },
  {
    title: "Football Academy",
    description: "Join our football academy for boys and girls in age groups: U8, U12, U14, and U17. Professional coaching and development programs.",
    image: "/Images/football/WhatsApp Image 2025-03-16 at 17.48.08.jpeg",
    categories: ["U8", "U12", "U14", "U17"]
  },
  {
    title: "Karate Training",
    description: "Learn martial arts with our experienced instructors. Classes available for all ages - Dufite ibyiciro 4, for both boys and girls.",
    image: "/Images/karate/WhatsApp Image 2025-03-16 at 17.55.25.jpeg",
    categories: ["Beginners", "Intermediate", "Advanced", "Elite"]
  }
]

export const Programs = () => {
  return (
    <section id="programs" className="py-20 relative overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-gray-100/50 to-white" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                {program.price ? (
                  <p className="text-red-600 font-semibold">{program.price}</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {program.categories?.map((category) => (
                      <span 
                        key={category}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
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