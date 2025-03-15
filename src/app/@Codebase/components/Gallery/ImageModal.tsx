'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'

interface ImageModalProps {
  image: string
  onClose: () => void
}

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl aspect-[4/3]">
        <Image
          src={image}
          alt="Gallery image"
          fill
          className="object-contain"
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors"
        >
          <IoClose />
        </button>
      </div>
    </div>
  )
} 