'use client'

import { useEffect, useState } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
  direction?: 'up' | 'down'
}

export const Parallax = ({ 
  children, 
  offset = 50, 
  className = '',
  direction = 'up'
}: ParallaxProps) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const multiplier = direction === 'up' ? -0.1 : 0.1
  const transform = `translateY(${scrollY * multiplier}px)`

  return (
    <div className={`relative will-change-transform ${className}`}>
      <div 
        style={{ transform }} 
        className="transition-transform duration-75 ease-linear"
      >
        {children}
      </div>
    </div>
  )
} 