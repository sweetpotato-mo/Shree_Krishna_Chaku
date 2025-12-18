'use client'

import React from 'react'
import { BookOpen, Calendar } from 'lucide-react'

interface Chronicle {
  title: string
  titleNe: string
  excerpt: string
  excerptNe: string
  date: string
  category: string
}

const chronicles: Chronicle[] = [
  {
    title: 'The Secret Rhythm of the Hook',
    titleNe: 'गजुुरको गोप्य ताल',
    excerpt: 'In the quiet hours of dawn, the Gajur—the stout wooden hook secured into the wall—becomes a metronome of tradition. Each pull (Taneko), each stretch, follows a rhythm passed down through generations—a rhythm that cannot be rushed.',
    excerptNe: 'बिहानको शान्त घण्टाहरूमा, गजुुर—काठको मोटो हुक जुन भित्तामा सुरक्षित छ—परम्पराको मेट्रोनोम बन्छ। प्रत्येक तान्ने (तानेको), प्रत्येक फैलाउने, पुस्ता दर पुस्ता हस्तान्तरित ताल अनुसरण गर्छ—एक ताल जुन हतार गर्न सकिँदैन।',
    date: 'Maghe Sankranti 2080',
    category: 'Tradition',
  },
  {
    title: 'Why Maghe Sankranti Belongs to Tokha',
    titleNe: 'किन माघे सङ्क्रान्ति टोखाको हो',
    excerpt: 'Maghe Sankranti marks the peak of Chaku season in Tokha. The cold winter air, the warmth of the fire, and the communal spirit of making Chaku together—this is when Tokha truly comes alive.',
    excerptNe: 'माघे सङ्क्रान्तिले टोखामा चाकुको मौसमको चरमोत्कर्षलाई चिन्ह लगाउँछ। चिसो जाडोको हावा, आगोको तातो, र सँगै चाकु बनाउने सामुदायिक भावना—यो टोखा साँच्चै जीवन्त हुने समय हो।',
    date: 'Maghe Sankranti 2080',
    category: 'Festival',
  },
  {
    title: 'The Four Generations',
    titleNe: 'चार पुस्ता',
    excerpt: 'From great-grandfather to father, from father to son, and now to the next generation—each has added their touch while preserving the core essence of what makes our Chaku special.',
    excerptNe: 'हजुरबाबाबाट बाबामा, बाबाबाट छोरामा, र अब अर्को पुस्तामा—प्रत्येकले आफ्नो स्पर्श थपेका छन्, जबकि हाम्रो चाकुलाई विशेष बनाउने मुख्य सार संरक्षण गर्दै।',
    date: 'Heritage 2080',
    category: 'Heritage',
  },
  {
    title: 'The Art of Patience',
    titleNe: 'धैर्यको कला',
    excerpt: 'In a world of instant gratification, Chaku making teaches us the value of patience. Hours of slow pulling, careful attention to temperature, and respect for the process—these are lessons that extend beyond the kitchen.',
    excerptNe: 'तत्काल संतुष्टिको संसारमा, चाकु बनाउनेले हामीलाई धैर्यको मूल्य सिकाउँछ। घण्टौंको बिस्तारै तान्ने, तापक्रममा सावधानी, र प्रक्रियाप्रति सम्मान—यी पाठहरू भान्छाबाट टाढा फैलिन्छन्।',
    date: 'Wisdom 2080',
    category: 'Philosophy',
  },
]

const TokhaChronicles: React.FC = () => {
  return (
    <section id="chronicles" className="relative py-24 md:py-32 bg-parchment">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <BookOpen className="text-hyangu-red mr-3" size={32} />
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-hyangu-red">
              Tokha Chronicles
            </h2>
          </div>
          <p className="text-lg text-masi-black/80 max-w-2xl mx-auto">
            Stories, traditions, and wisdom from the heart of Tokha's Chaku heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {chronicles.map((chronicle, index) => (
            <article
              key={chronicle.title}
              className="group bg-parchment border-2 border-masi-black/10 hover:border-hyangu-red/50 transition-all duration-300 p-8 md:p-10 space-y-6"
            >
              {/* Chapter Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-hyangu-red font-semibold mb-2 block">
                    Chapter {index + 1} • {chronicle.category}
                  </span>
                  <h3 className="heading-serif text-2xl md:text-3xl text-masi-black mb-2 group-hover:text-hyangu-red transition-colors">
                    {chronicle.title}
                  </h3>
                  <p className="nepali-text text-masi-black/70 text-sm mb-3">
                    {chronicle.titleNe}
                  </p>
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-3">
                <p className="text-masi-black/80 leading-relaxed text-base">
                  {chronicle.excerpt}
                </p>
                <p className="nepali-text text-masi-black/70 leading-relaxed text-sm">
                  {chronicle.excerptNe}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-masi-black/10">
                <div className="flex items-center text-masi-black/60 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{chronicle.date}</span>
                </div>
                <button className="text-hyangu-red font-semibold text-sm hover:underline transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TokhaChronicles
