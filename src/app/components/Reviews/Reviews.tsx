'use client'

import { useState } from 'react'
import Image from 'next/image'

const reviews = [
  {
    name: "Murindahabi Olivier",
    role: "Member",
    comment: "MU12 Fitness has transformed my life. The trainers are exceptional and the equipment is top-notch.",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.05.jpeg"
  },
  {
    name: "MUVANDIMWE jmv ",
    role: "Former Rayon Sport player",
    comment: "The best gym in Kigali! The community here is so supportive and motivating.",
    image: "/Images/WhatsApp Image 2025-03-15 at 12.32.06.jpeg"
  },
  {
    name: "YOUSSEF RHAB",
    role: "Professional Athlete",
    comment: "As a professional athlete, I need the best facilities. MU12 Fitness exceeds all expectations.",
    image: "/Images/rahab.png"
  }
]

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={review.name}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">{review.name}</h3>
                <p className="text-red-600 text-sm text-center mb-4">{review.role}</p>
                <p className="text-gray-600 text-center">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 