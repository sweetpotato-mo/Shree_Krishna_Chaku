'use client'

import React from 'react'
import { getAssetPath } from '@/lib/utils'

const TheLineage: React.FC = () => {
  return (
    <section id="lineage" className="relative py-24 md:py-32 bg-parchment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[550px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-masi-black via-hyangu-red/20 to-masi-black">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${getAssetPath('/factory-tokha.jpg')})`,
                  filter: 'sepia(0.1) contrast(1.1) brightness(0.95)',
                  backdropFilter: 'blur(8px)'
                }} 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-masi-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-parchment">
              <p className="text-sm opacity-90">Tokha-3, Dekwo, Kathmandu</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-hyangu-red mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-masi-black leading-relaxed">
              <p>
                Rooted in a four-generation family craft and officially registered in 2063 B.S., 
                Shree Krishna Chaku Production is a protector of Tokha&apos;s ancestral taste. 
                Our family has dedicated itself to preserving the traditional methods of Chaku making, 
                passed down through the ages.
              </p>
              <p>
                Our journey began in the heart of Tokha-3, Dekwo, where the rhythm of the Gajur (wooden hook) 
                and the slow, deliberate process of Taneko (pulling) Chaku became synonymous with our name. 
                Each batch is crafted with the same care and attention that our ancestors brought to 
                this sacred art.
              </p>
              <p>
                As proud members of the <span className="font-semibold text-hyangu-red">Tokha Traditional 
                Chaku Conservation Society</span>, we are committed to maintaining the purity and authenticity 
                of this time-honored tradition. Our Chaku is SO2 free, with no added colors or preservatives— 
                just pure, traditional craftsmanship.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-hyangu-red/30">
              <p className="text-antique-gold font-semibold text-xl">
                &quot;Preserving Tokha&apos;s legacy, generation after generation.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheLineage
