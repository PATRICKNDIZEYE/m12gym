'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageModal } from './ImageModal'

const gymImages = [
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05 (1).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05 (2).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05 (3).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.05 (4).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.06.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.06 (1).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.06 (2).jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.07.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.32.08.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.33.37.jpeg',
  '/Images/WhatsApp Image 2025-03-15 at 12.33.37 (1).jpeg',
]

const footballImages = [
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.08.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.09.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.10.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.11.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.12.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.13.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.14.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.15.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.16.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.17.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.18.jpeg",
  "/Images/football/WhatsApp Image 2025-03-16 at 17.48.08 (1).jpeg",
]

const karateImages = [
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.25.jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.26 (1).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.26.jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.27 (1).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.27 (2).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.27.jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.28 (1).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.28.jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.29 (1).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.29 (2).jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.29.jpeg",
  "/Images/Karate/WhatsApp Image 2025-03-16 at 17.55.30.jpeg"
]

type GalleryTab = 'gym' | 'football' | 'karate'

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('gym')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})

  const images = {
    gym: gymImages,
    football: footballImages,
    karate: karateImages
  }[activeTab]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab('gym')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'gym'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Fitness Gym
            </button>
            <button
              onClick={() => setActiveTab('football')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'football'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Football Academy
            </button>
            <button
              onClick={() => setActiveTab('karate')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'karate'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Karate Training
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer
                transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              {loading[image] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              <Image
                src={image}
                alt={`${activeTab} image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                onLoadingComplete={() => {
                  setLoading(prev => ({ ...prev, [image]: false }))
                }}
                onLoadStart={() => {
                  setLoading(prev => ({ ...prev, [image]: true }))
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  )
} 