"use client";

import React, { useState, useEffect } from "react";
import { getAssetPath } from "@/lib/utils";
import { X } from "lucide-react";

interface Product {
  name: string;
  nameNe: string;
  description: string;
  descriptionNe: string;
  image: string;
  color: string;
}

const products: Product[] = [
  {
    name: "Sada Chaku",
    nameNe: "सादा चाकु",
    description:
      "The purest form of Chaku, made with traditional methods and no additives.",
    descriptionNe:
      "चाकुको शुद्धतम रूप, परम्परागत विधिबाट बनाइएको, कुनै योजक बिना।",
    image: "/sada-chaku.jpg",
    color: "from-parchment to-parchment/80",
  },
  {
    name: "Masala Chaku",
    nameNe: "मसला चाकु",
    description:
      "Infused with aromatic spices, a celebration of Newari flavors.",
    descriptionNe: "सुगन्धित मसलाहरूले युक्त, नेवारी स्वादको उत्सव।",
    image: "/masala-chaku.jpg",
    color: "from-hyangu-red/20 to-hyangu-red/10",
  },
  {
    name: "Khuwa Chaku",
    nameNe: "खुवा चाकु",
    description:
      "Rich and creamy, enhanced with traditional Khuwa for a luxurious texture.",
    descriptionNe:
      "धनी र क्रीमी, परम्परागत खुवाले समृद्ध, विलासी बनावटको लागि।",
    image: "/khuwa-chaku.jpg",
    color: "from-antique-gold/20 to-antique-gold/10",
  },
  {
    name: "Sutkeri Chaku",
    nameNe: "सुत्केरी चाकु",
    description:
      "A restorative blend with ginger, fenugreek, and traditional herbs, crafted specifically for maternal health and strength.",
    descriptionNe: "अदुवा, मेथी, र परम्परागत जडिबुटीको पुनर्स्थापनात्मक मिश्रण, मातृ स्वास्थ्य र शक्तिको लागि विशेष रूपमा बनाइएको।",
    image: "/sutkeri-chaku.jpg",
    color: "from-masi-black/10 to-masi-black/5",
  },
];

const ProductShowcase: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDiscoverRitual = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Show toast notification
    setShowToast(true);
    // Scroll to inquiry section
    const inquirySection = document.getElementById("inquiry-section");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <section id="products" className="relative py-24 md:py-32 bg-parchment">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 md:right-8 z-[200] animate-slide-in-right">
          <div className="bg-masi-black text-parchment p-4 md:p-6 rounded-lg shadow-2xl border-2 border-hyangu-red max-w-sm">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm md:text-base leading-relaxed flex-1">
                The detailed ritual guide for this variety is being curated and is not available yet. In the meantime, feel free to contact us regarding your requirements using the form below.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pb-12">
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-hyangu-red mb-4">
            Our Products
          </h2>
          <p className="heading-serif text-lg text-masi-black/70 italic max-w-2xl mx-auto">
            A curated selection of varieties, each crafted with the same dedication to tradition and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-parchment border-2 border-masi-black/10 hover:border-hyangu-red transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-masi-black via-hyangu-red/20 to-masi-black overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${getAssetPath(product.image || '/placeholder-chaku.jpg')})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-masi-black/60 via-transparent to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <div>
                  <h3 className="heading-serif text-2xl text-hyangu-red mb-1">
                    {product.name}
                  </h3>
                  <p className="nepali-text text-masi-black/70 text-sm">
                    {product.nameNe}
                  </p>
                </div>
                <p className="text-masi-black/80 text-sm leading-relaxed flex-1">
                  {product.description}
                </p>
                <button
                  onClick={handleDiscoverRitual}
                  className="w-full py-3 border-2 border-hyangu-red text-hyangu-red hover:bg-hyangu-red hover:text-parchment transition-all duration-300 font-semibold text-sm tracking-wide mt-auto"
                >
                  Discover the Ritual
                </button>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="group relative bg-parchment/40 border-2 border-dashed border-hyangu-red/30 hover:border-hyangu-red/50 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in">
            {/* Icon Area */}
            <div className="relative h-64 bg-gradient-to-br from-parchment/60 to-parchment/40 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-center">
              <h3 className="heading-serif text-2xl text-hyangu-red mb-2 italic">
                The Collection Continues
              </h3>
              <p className="text-masi-black/60 text-sm leading-relaxed">
                A legacy this deep cannot be captured in a single glance. Our full product catalogue is being curated and will be available here soon.
              </p>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section - Partner with Heritage */}
        <div id="inquiry-section" className="mt-8 sm:mt-12 p-6 sm:p-8 md:p-10 glassmorphism rounded-xl border border-antique-gold/30 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-parchment mb-3 sm:mb-4 heading-serif px-2">
            Partner with Tokha&apos;s Legacy
          </h3>
          <p className="text-parchment/70 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
            Whether you are a local retailer, an international exporter, or planning a grand celebration, 
            we invite you to bring the authentic warmth of Shree Krishna Tokha Chaku to your community. 
            Please share your requirements through our official inquiry portal.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdftlwL_fdx5JvlY_ESCHmx3pDvDL-j8FTexv1vxM_HAr9eGQ/viewform?usp=sharing&ouid=108440557764622866401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 bg-antique-gold text-masi-black font-bold uppercase tracking-wide sm:tracking-[0.15em] md:tracking-[0.2em] rounded-full border-2 border-antique-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 hover:bg-antique-gold/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-sm sm:text-base md:text-lg whitespace-nowrap"
          >
            Open Order/ Inquiry Form
          </a>
        </div>

        {/* Purity Badge */}
        <div className="text-center border-t-2 border-hyangu-red/30 pt-8 mt-8">
          <p className="text-masi-black/70 text-sm tracking-wide uppercase">
            Traditionally Crafted. SO2 Free. No Added Colors or Preservatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
