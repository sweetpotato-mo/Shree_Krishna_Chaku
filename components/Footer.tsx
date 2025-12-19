"use client";

import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative bg-masi-black text-parchment py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-16">
          {/* Left: Map Location */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="text-antique-gold flex-shrink-0" size={20} />
              <h3 className="heading-serif text-xl sm:text-2xl text-parchment">
                Visit Us
              </h3>
            </div>
            <div className="space-y-2 text-parchment/80">
              <p className="text-base sm:text-lg font-semibold">
                Shree Krishna Chaku Production Pvt. Ltd.
              </p>
              <p>Tokha-3, Dekwo</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <a
              href="https://maps.app.goo.gl/cE3QnE9E4f8wiuxf9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-hyangu-red hover:bg-hyangu-red/90 text-parchment px-6 py-3 rounded-none font-semibold transition-all duration-300 border-2 border-parchment/20 hover:border-parchment/40 mt-6"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-serif text-xl sm:text-2xl text-parchment mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone
                    className="text-antique-gold flex-shrink-0"
                    size={18}
                  />
                  <a
                    href="tel:+9779841308823"
                    className="text-parchment/80 hover:text-antique-gold transition-colors duration-200 text-base sm:text-lg break-all"
                  >
                    +977 984-1308823
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone
                    className="text-antique-gold flex-shrink-0"
                    size={18}
                  />
                  <a
                    href="tel:+9779851231823"
                    className="text-parchment/80 hover:text-antique-gold transition-colors duration-200 text-base sm:text-lg break-all"
                  >
                    +977 985-1231823
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-antique-gold flex-shrink-0" size={18} />
                  <a
                    href="mailto:krishnatokhachaku@gmail.com"
                    className="text-parchment/80 hover:text-antique-gold transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    krishnatokhachaku@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-parchment/90 font-semibold mb-4">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/krishna.tokha.chaku.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-parchment/30 hover:border-antique-gold flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook
                    className="text-parchment/80 hover:text-antique-gold"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@krishnatokhachaku0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-parchment/30 hover:border-antique-gold flex items-center justify-center transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg
                    className="text-parchment/80 hover:text-antique-gold w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/9779841308823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-parchment/30 hover:border-antique-gold flex items-center justify-center transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle
                    className="text-parchment/80 hover:text-antique-gold"
                    size={20}
                  />
                </a>
              </div>
            </div>

            {/* Heritage Statement */}
            <div className="pt-6 border-t border-parchment/20">
              <p className="text-parchment/70 text-sm leading-relaxed">
                Member of the{" "}
                <span className="text-antique-gold font-semibold">
                  Tokha Traditional Chaku Conservation Society
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="border-t border-parchment/20 pt-8 text-center">
          <p className="heading-serif text-xl text-antique-gold mb-2">
            Preserving Tokha&apos;s heritage, one batch at a time.
          </p>
          <p className="text-parchment/60 text-sm">
            © {new Date().getFullYear()} Shree Krishna Chaku Production Pvt.
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
