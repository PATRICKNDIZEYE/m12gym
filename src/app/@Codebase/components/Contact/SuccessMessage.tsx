'use client'

import { FaCheckCircle } from 'react-icons/fa'

interface SuccessMessageProps {
  onClose: () => void
}

export const SuccessMessage = ({ onClose }: SuccessMessageProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-8 max-w-md w-11/12 mx-4 animate-fadeIn">
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-medium 
              hover:bg-red-700 transition-all duration-300 text-sm tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
} 