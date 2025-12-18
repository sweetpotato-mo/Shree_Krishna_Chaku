"use client";

import React from "react";
import { getAssetPath } from "@/lib/utils";

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
      "A special blend with ginger, perfect for traditional celebrations.",
    descriptionNe: "अदुवासँगको विशेष मिश्रण, परम्परागत उत्सवहरूको लागि उत्तम।",
    image: "/sutkeri-chaku.jpg",
    color: "from-masi-black/10 to-masi-black/5",
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-hyangu-red mb-4">
            Our Products
          </h2>
          <p className="text-lg text-masi-black/80 max-w-2xl mx-auto">
            Four distinct varieties, each crafted with the same dedication to
            tradition and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-parchment border-2 border-masi-black/10 hover:border-hyangu-red transition-all duration-300 overflow-hidden"
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
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="heading-serif text-2xl text-hyangu-red mb-1">
                    {product.name}
                  </h3>
                  <p className="nepali-text text-masi-black/70 text-sm">
                    {product.nameNe}
                  </p>
                </div>
                <p className="text-masi-black/80 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button
                  className="w-full py-3 border-2 border-hyangu-red text-hyangu-red hover:bg-hyangu-red hover:text-parchment transition-all duration-300 font-semibold text-sm tracking-wide"
                >
                  Discover the Ritual
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Form Section - Partner with Heritage */}
        <div className="mt-12 p-10 glassmorphism rounded-xl border border-antique-gold/30 text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold text-parchment mb-3 heading-serif">
            Partner with Tokha&apos;s Legacy
          </h3>
          <p className="text-parchment/70 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you are a local retailer, an international exporter, or planning a grand celebration, 
            we invite you to bring the authentic warmth of Shree Krishna Tokha Chaku to your community. 
            Please share your requirements through our official inquiry portal.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdftlwL_fdx5JvlY_ESCHmx3pDvDL-j8FTexv1vxM_HAr9eGQ/viewform?usp=sharing&ouid=108440557764622866401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-16 py-5 bg-antique-gold text-masi-black font-bold uppercase tracking-[0.2em] rounded-full border-2 border-antique-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 hover:bg-antique-gold/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            Open Inquiry Form
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
