import React, { ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { formatDate } from '../lib/utils'

interface SlideLayoutProps {
  children: ReactNode
  slideNumber: number
  totalSlides: number
}

export default function SlideLayout({ children, slideNumber, totalSlides }: SlideLayoutProps) {
  const router = useRouter()
  
  return (
    <div className="min-h-screen p-8 relative">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Home className="w-8 h-8" />
      </div>
      
      {/* Navigation */}
      <div className="absolute top-8 right-8 flex gap-4">
        <button 
          onClick={() => router.push(`/slide/${slideNumber - 1}`)}
          disabled={slideNumber <= 1}
          className="p-2 border rounded-lg disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => router.push(`/slide/${slideNumber + 1}`)}
          disabled={slideNumber >= totalSlides}
          className="p-2 border rounded-lg disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Main Content */}
      <main className="mt-24 mb-16">
        {children}
      </main>
      
      {/* Footer */}
      <div className="absolute bottom-8 left-8">
        {formatDate(new Date())}
      </div>
      <div className="absolute bottom-8 right-8">
        {slideNumber}
      </div>
    </div>
  )
}
