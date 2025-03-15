'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container py-2 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-[120px] h-[48px] md:w-[180px] md:h-[70px] -ml-4 md:ml-0">
            <Image 
              src="/logo.png"
              alt="MU12 Fitness Gym"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 120px, 180px"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-2xl rounded-full
            hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-sm tracking-wider hover:text-red-600 transition-colors">
              ABOUT
            </Link>
            <Link href="#programs" className="text-sm tracking-wider hover:text-red-600 transition-colors">
              PROGRAMS
            </Link>
            <Link href="#gallery" className="text-sm tracking-wider hover:text-red-600 transition-colors">
              GALLERY
            </Link>
            <Link href="#reviews" className="text-sm tracking-wider hover:text-red-600 transition-colors">
              REVIEWS
            </Link>
            <Link href="#contact" className="text-sm tracking-wider hover:text-red-600 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[80px] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="bg-white shadow-lg border-t">
            <div className="container py-4 flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-sm tracking-wider hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="#programs" 
                className="text-sm tracking-wider hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PROGRAMS
              </Link>
              <Link 
                href="#gallery" 
                className="text-sm tracking-wider hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link 
                href="#reviews" 
                className="text-sm tracking-wider hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                REVIEWS
              </Link>
              <Link 
                href="#contact" 
                className="text-sm tracking-wider hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 