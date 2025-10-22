'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

const ContentCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-3">
        {/* Placeholder for content image */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
            </div>
          </div>
        )}
        
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs text-white font-medium">8.5</span>
        </div>
        
        {/* Premium badge */}
        <div className="absolute top-2 right-2 bg-red-600 rounded px-2 py-1">
          <span className="text-xs text-white font-bold">MEGOGO</span>
        </div>
      </div>
      
      {/* Content info */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          Назва контенту
        </h3>
        <p className="text-xs text-gray-600">2023 • Драма</p>
      </div>
    </div>
  )
}

export default ContentCard