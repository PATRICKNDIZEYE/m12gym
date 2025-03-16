'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Parallax } from '../Parallax/Parallax'

const heroImages = [
  {
    src: '/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg',
    title: 'Transform Your Body',
    subtitle: 'Expert Personal Training'
  },
  {
    src: '/Images/WhatsApp Image 2025-03-15 at 12.32.08.jpeg',
    title: 'State-of-the-art Equipment',
    subtitle: 'Modern Fitness Facility'
  },
  {
    src: "/Images/football/WhatsApp Image 2025-03-16 at 17.48.08.jpeg",
    title: 'Football Academy',
    subtitle: 'Professional Coaching for All Ages'
  },
  {
    src: "/Images/football/WhatsApp Image 2025-03-16 at 17.48.11.jpeg",
    title: 'Youth Development',
    subtitle: 'U8 to U17 Training Programs'
  },
  {
    src: encodeURI("/Images/karate/WhatsApp Image 2025-03-16 at 17.55.25.jpeg"),
    title: 'Karate Training',
    subtitle: 'Learn Self-Defense & Discipline'
  },
  {
    src: encodeURI("/Images/karate/WhatsApp Image 2025-03-16 at 17.55.27 (1).jpeg"),
    title: 'All Skill Levels',
    subtitle: 'From Beginners to Advanced'
  }
]

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl">
          <Parallax offset={20}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              MU 12<br />FITNESS GYM
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Transform your body and mind at MU12 Fitness Gym. Professional training, 
              state-of-the-art equipment, and expert guidance for all fitness levels.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <a 
                href="tel:+250794466912" 
                className="w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-full font-medium 
                hover:bg-red-700 transition-all duration-300 text-sm tracking-wider text-center"
              >
                CONTACT US
              </a>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">FOLLOW US</span>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://wa.me/250794466912" 
                  className="text-white hover:text-red-500 transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </Parallax>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-4 md:left-8 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-red-600 w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-4 md:right-8 flex items-center gap-2">
          <Parallax offset={15}>
            <span className="hidden md:inline text-sm text-white">SCROLL DOWN</span>
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
              <span className="text-white">↓</span>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  )
} 