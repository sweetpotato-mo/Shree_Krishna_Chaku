"use client";

import { BookOpen, Calendar, X } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Chronicle {
  title: string;
  titleNe: string;
  excerpt: string;
  excerptNe: string;
  date: string;
  category: string;
}

const chronicles: Chronicle[] = [
  {
    title: "The Secret Rhythm of the Hook",
    titleNe: "किलाको गोप्य लय",
    excerpt:
      "In the quiet hours of dawn, the Keela—the stout wooden hook secured into the wall—becomes a metronome of tradition. Each pull (Taneko), each stretch, follows a rhythm passed down through generations—a rhythm that cannot be rushed.",
    excerptNe:
      "बिहानीको मिर्मिरेमा, भित्तामा बलियो गरी गाडिएको त्यो 'किला' परम्पराको मियो बन्छ। चाकु तान्ने (तनेको) प्रत्येक धक्का र तन्काईमा पुर्खाले सिकाएको लय गुञ्जिन्छ—त्यस्तो लय जसमा हतारको कुनै गुञ्जायस हुँदैन।",
    date: "Maghe Sankranti 2080 B.S.",
    category: "Tradition",
  },
  {
    title: "Why Maghe Sankranti Belongs to Tokha",
    titleNe: "माघे सङ्क्रान्ति र टोखाको अटूट सम्बन्ध",
    excerpt:
      "Maghe Sankranti marks the peak of Chaku season in Tokha. The cold winter air, the warmth of the fire, and the communal spirit of making Chaku together—this is when Tokha truly comes alive.",
    excerptNe:
      "माघे सङ्क्रान्ति टोखामा चाकु उत्पादनको मुख्य याम हो। जाडोको सिरेटो बिर्साउने आगोको न्यानो र सबै मिलेर चाकु बनाउने त्यो रमाइलो माहोल—यही समयमा टोखा साँच्चै गुल्जार देखिन्छ।",
    date: "Maghe Sankranti 2080 B.S.",
    category: "Festival",
  },
  {
    title: "The Four Generations",
    titleNe: "चार पुस्ताको विरासत",
    excerpt:
      "From great-grandfather to father, from father to son, and now to the next generation—each has added their touch while preserving the core essence of what makes our Chaku special.",
    excerptNe:
      "जिजुबाजेदेखि बाजे, बाजेदेखि बुबा र बुबादेखि छोराहरूसम्म—प्रत्येक पुस्ताले चाकुको मौलिक स्वाद र गुणस्तरलाई जोगाउँदै आ-आफ्नो सीप र मेहेनत थपेका छन्।",
    date: "Heritage 2080 B.S.",
    category: "Heritage",
  },
  {
    title: "The Art of Patience",
    titleNe: "धैर्यताको पाठ",
    excerpt:
      "In a world of instant gratification, Chaku making teaches us the value of patience. Hours of slow pulling, careful attention to temperature, and respect for the process—these are lessons that extend beyond the kitchen.",
    excerptNe:
      "सबै कुरा तुरुन्तै चाहिने आजको हतारोको दुनियाँमा, चाकु बनाउने कलाले हामीलाई धैर्यताको महत्त्व सिकाउँछ। घण्टौंसम्म तान्नुपर्ने धैर्य, तापक्रमको सही सन्तुलन र कामप्रतिको सम्मान—यी पाठहरू भान्छामा मात्र सीमित नभई जीवनमै काम लाग्ने खालका छन्।",
    date: "Wisdom 2080 B.S.",
    category: "Philosophy",
  },
];

const TokhaChronicles: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleReadMore = () => {
    // Show toast notification
    setShowToast(true);
    // Scroll to smarika archive section
    const smarikaSection = document.getElementById("smarika-archive");
    if (smarikaSection) {
      smarikaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

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
            Stories, traditions, and wisdom from the heart of Tokha&apos;s Chaku
            heritage.
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
                <button 
                  onClick={handleReadMore}
                  className="text-hyangu-red font-semibold text-sm hover:underline transition-colors duration-200"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Archive Announcement Card */}
        <div id="smarika-archive" className="mt-16 md:mt-20 scroll-mt-[100px]">
          <article className="relative bg-[#F9F6F0] border-4 border-masi-black p-8 md:p-12 max-w-3xl mx-auto">
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-hyangu-red text-parchment text-xs uppercase tracking-wider font-semibold px-3 py-1.5">
                Coming Soon
              </span>
            </div>

            {/* Book Icon */}
            <div className="flex justify-center mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h6" />
              </svg>
            </div>

            {/* Headline */}
            <h3 className="heading-serif text-2xl md:text-3xl text-masi-black text-center mb-6">
              Digitizing the Chaku Smarika (2078 B.S.)
            </h3>

            {/* Body Text */}
            <p className="text-masi-black/80 leading-relaxed text-base md:text-lg text-center max-w-2xl mx-auto">
              The wisdom of Tokha is being preserved for the digital age. A
              curated selection of printed articles from the Chaku Smarika (2078
              B.S.) will soon be available here. This collection features deep
              insights on the history, culture, and future prospects of Tokha
              and Chaku from influential Newa: personalities who relate to Tokha
              and the broader Newa: culture.
            </p>
          </article>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 md:right-8 z-[200] animate-slide-in-right">
          <div className="bg-masi-black text-parchment p-4 md:p-6 rounded-lg shadow-2xl border-l-4 border-hyangu-red max-w-sm">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm md:text-base leading-relaxed flex-1">
                The full article and digital records for this chapter will be available here soon.
              </p>
              <button
                onClick={() => setShowToast(false)}
                className="text-parchment/70 hover:text-parchment transition-colors flex-shrink-0"
                aria-label="Close notification"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TokhaChronicles;
