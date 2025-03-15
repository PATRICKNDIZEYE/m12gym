import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="relative w-[180px] h-[70px] mb-6">
              <Image 
                src="/logo.png"
                alt="MU12 Fitness Gym"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400">
              Transform your life through fitness with Rwanda's premier gym facility.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link href="#programs" className="block text-gray-400 hover:text-white">Programs</Link>
              <Link href="#gallery" className="block text-gray-400 hover:text-white">Gallery</Link>
              <Link href="#contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday: 7:00 AM - 8:00 PM</p>
              <p>Sunday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Kigali, Rwanda</p>
              <p>Phone: +250 794 466 912</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-red-500"><FaFacebook size={24} /></a>
                <a href="#" className="hover:text-red-500"><FaInstagram size={24} /></a>
                <a href="https://wa.me/250794466912" className="hover:text-red-500">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MU12 Fitness Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 