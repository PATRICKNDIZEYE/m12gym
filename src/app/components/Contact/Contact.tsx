'use client'

import { useState, FormEvent } from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { SuccessMessage } from './SuccessMessage'

export const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // Simulating an API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaPhone className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <a 
                  href="tel:+250794466912" 
                  className="text-gray-600 hover:text-red-600"
                >
                  +250 794 466 912
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <a 
                  href="https://wa.me/250794466912" 
                  className="text-gray-600 hover:text-red-600"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 text-xl mt-1" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-600">Kigali, Rwanda</p>
                <p className="text-gray-600">Open: Monday - Sunday</p>
                <p className="text-gray-600">Hours: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-600">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email Us</h4>
                <a 
                  href="mailto:jeammuvandimwe@gmail.com"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  jeammuvandimwe@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 text-white py-3 rounded-lg font-medium 
                  transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:bg-red-700'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {showSuccess && (
        <SuccessMessage onClose={() => setShowSuccess(false)} />
      )}
    </section>
  )
} 