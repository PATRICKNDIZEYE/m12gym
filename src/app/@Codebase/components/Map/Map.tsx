'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./MapContent'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
      Loading map...
    </div>
  ),
})

export const Map = () => {
  return <MapWithNoSSR />
} 