'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageModal } from './ImageModal'

const galleryImages = [
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.06.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.07.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.08.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.33.37.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05 (1).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.06 (1).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.07 (1).jpeg',
  // Add all other images here
]

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Our Facility</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image} 
              className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  )
} 