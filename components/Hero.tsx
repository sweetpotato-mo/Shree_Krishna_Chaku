'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('lineage')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.75) contrast(1.1) sepia(0.1)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <source src="/chaku-pulling.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-masi-black via-hyangu-red to-masi-black" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-masi-black/40 via-transparent to-parchment/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-parchment mb-6 leading-tight">
            Tokha's Heritage,
            <br />
            <span className="text-antique-gold">Refined Over Four Generations</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-parchment/90 mb-12 font-light">
            A 4th-generation artisanal tradition from Tokha-3, Deuko, Kathmandu
          </p>

          <button
            onClick={scrollToNext}
            className="px-8 py-4 bg-hyangu-red text-parchment rounded-none border-2 border-parchment hover:bg-parchment hover:text-hyangu-red transition-all duration-300 font-semibold text-lg tracking-wide"
          >
            Explore the Lineage
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="text-parchment hover:text-antique-gold transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
