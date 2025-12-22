"use client";

import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

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
                  backgroundImage: `url(${getAssetPath("/factory-tokha.jpg")})`,
                  filter: "sepia(0.1) contrast(1.1) brightness(0.95)",
                  backdropFilter: "blur(8px)",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-masi-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-parchment">
              <p className="text-sm opacity-90">
                <span className="lang-en">Tokha-3, Dekwo, Kathmandu</span>
                <span className="lang-ne">काठमाडौं, देक्वो, टोखा-३</span>
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-hyangu-red mb-4">
              <span className="lang-en">Our Story</span>
              <span className="lang-ne">हाम्रो कथा</span>
            </h2>
            <div className="space-y-4 text-lg text-masi-black leading-relaxed">
              <p>
                <span className="lang-en">
                  Rooted in a four-generation family craft and officially
                  registered in 2063 B.S., Shree Krishna Chaku Production is a
                  protector of Tokha&apos;s ancestral taste. Our family has
                  dedicated itself to preserving the traditional methods of Chaku
                  making, passed down through the ages.
                </span>
                <span className="lang-ne">
                  चार पुस्तादेखि चलिआएको पारिवारिक सीपमा आधारित र वि.सं. २०६३ मा आधिकारिक रूपमा दर्ता भएको &apos;श्री कृष्ण चाकु प्रोडक्सन&apos; टोखाको पुर्ख्यौली स्वादको संरक्षक हो। हाम्रो परिवार पुस्तौंदेखि हस्तान्तरण हुँदै आएको चाकु बनाउने परम्परागत विधिलाई जोगाउन पूर्ण रूपमा समर्पित छ।
                </span>
              </p>
              <p>
                <span className="lang-en">
                  Our journey began in the heart of Tokha-3, Dekwo, where the
                  rhythm of the Keela (wooden hook) and the slow, deliberate
                  process of aerating (फिट्नु) Chaku became synonymous with our
                  name. Each batch is crafted with the same care and attention
                  that our ancestors brought to this sacred art.
                </span>
                <span className="lang-ne">
                  हाम्रो यात्रा टोखा-३, देक्वोको मुटुबाट सुरु भएको हो, जहाँ &apos;किला&apos; (काठको हुक) को ताल र चाकु तान्ने धैर्यपूर्ण प्रक्रिया नै हाम्रो पहिचान बन्यो। प्रत्येक ब्याच त्यही आत्मीयता र सावधानीका साथ तयार गरिन्छ जुन हाम्रा पुर्खाहरूले यस पवित्र कलामा भर्थे।
                </span>
              </p>
              <p>
                <span className="lang-en">
                  As a proud member of the{" "}
                  <a
                    href="https://english.onlinekhabar.com/tokha-bazaar-gears-up-for-maghe-sankranti-to-fulfill-demand-for-chaku.html#:~:text=The%20Chaku%20produced%20here%20is,various%20countries%20around%20the%20world."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-masi-black border-b border-masi-black/30 hover:text-hyangu-red hover:border-hyangu-red/70 transition-all duration-300 ease-in-out"
                  >
                    Tokha Traditional Chaku Conservation Society
                  </a>
                  , we are committed to maintaining the purity and authenticity of
                  this time-honored tradition. Our Chaku is SO2 free, with no
                  added colors or preservatives— just pure, traditional
                  craftsmanship.
                </span>
                <span className="lang-ne">
                  {" "}
                  <a
                    href="https://english.onlinekhabar.com/tokha-bazaar-gears-up-for-maghe-sankranti-to-fulfill-demand-for-chaku.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-masi-black border-b border-masi-black/30 hover:text-hyangu-red hover:border-hyangu-red/70 transition-all duration-300 ease-in-out"
                  >
                    &apos;टोखा परम्परागत चाकु संरक्षण समाज&apos;
                  </a>
                  {" "}को गर्विलो सदस्यका रूपमा हामी यस ऐतिहासिक परम्पराको शुद्धता र मौलिकता कायम राख्न प्रतिबद्ध छौं। हाम्रो चाकु SO<sub>2</sub> मुक्त छ र कुनै अतिरिक्त रङ्ग वा संरक्षक तत्वहरू मिसाइएको छैन—यो केवल शुद्ध र परम्परागत हस्तकलाको उपज हो।
                </span>
              </p>
            </div>
            <div className="pt-4 border-t-2 border-hyangu-red/30">
              <p className="text-antique-gold font-semibold text-xl">
                <span className="lang-en">
                  &quot;Preserving Tokha&apos;s legacy, generation after
                  generation.&quot;
                </span>
                <span className="lang-ne">
                  &quot;पुस्ता दर पुस्ता, टोखाको विरासत जोगाउँदै।&quot;
                </span>
              </p>
            </div>
            {/* Digital Archive Notice */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="pt-6 mt-6 border-t border-hyangu-red/10"
            >
              {/* Quill Icon */}
              <div className="flex justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-75"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <p className="heading-serif text-masi-black/60 text-sm italic leading-relaxed text-center">
                <span className="lang-en text-masi-black/90 font-medium">The complete story of Tokha, the heritage of Chaku, and the legacy of Shree Krishna Chaku will be unveiled here soon.</span>
                <span className="lang-ne text-masi-black/90 font-medium">टोखाको पूर्ण कथा, चाकुको इतिहास र श्री कृष्ण चाकुको विरासत चाँडै यहाँ प्रस्तुत गरिनेछ।</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheLineage;
