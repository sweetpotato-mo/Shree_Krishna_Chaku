"use client";

import { getAssetPath } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ne">("en");

  const navItems = [
    { en: "Our Story", ne: "हाम्रो कथा", id: "lineage" },
    { en: "Products", ne: "उत्पादनहरू", id: "products" },
    { en: "Tokha Chronicles", ne: "टोखा इतिहास", id: "chronicles" },
    { en: "Visit Us", ne: "भेट्नुहोस्", id: "footer" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-masi-black border-b-[2px] border-hyangu-red relative shadow-lg">
      {/* Dual border: 2px red + 1px black (Masi-Hyangu) */}
      <div className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-masi-black"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Horizontal Logo Lockup */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 focus:outline-none flex-shrink-0"
          >
            {/* Logo - enhanced visibility on dark background */}
            <div className="relative h-10 sm:h-12 md:h-14 w-auto">
              <Image
                src={getAssetPath("/LOGO_Colored.jpeg")}
                alt="Shree Krishna Tokha Chaku"
                width={56}
                height={56}
                className="h-full w-auto object-contain brightness-125 contrast-110"
                priority
                style={{
                  filter: "brightness(1.25) contrast(1.1)",
                }}
              />
            </div>
            {/* Brand Text in Antique Gold - visible on all screens, wraps on mobile */}
            <span className="heading-serif text-xs sm:text-lg md:text-xl lg:text-2xl text-antique-gold leading-tight">
              <span className="block sm:inline">Shree Krishna</span>
              <span className="block sm:inline sm:ml-1">Tokha Chaku</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nepali-text text-parchment/90 hover:text-parchment relative transition-colors duration-200 font-medium text-sm tracking-wide group"
              >
                {language === "en" ? item.en : item.ne}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-antique-gold transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-1 border-l border-parchment/20 pl-4 ml-4">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-antique-gold"
                    : "text-parchment/70 hover:text-parchment"
                }`}
              >
                EN
              </button>
              <span className="text-parchment/40">|</span>
              <button
                onClick={() => setLanguage("ne")}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  language === "ne"
                    ? "text-antique-gold"
                    : "text-parchment/70 hover:text-parchment"
                }`}
              >
                ने
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors duration-300 text-antique-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-parchment/20 bg-masi-black">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-parchment/90 hover:text-parchment simple-hover py-2"
              >
                {language === "en" ? item.en : item.ne}
              </button>
            ))}
            <div className="flex items-center space-x-2 pt-4 border-t border-parchment/20">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-sm font-medium ${
                  language === "en" ? "text-antique-gold" : "text-parchment/70"
                }`}
              >
                EN
              </button>
              <span className="text-parchment/40">|</span>
              <button
                onClick={() => setLanguage("ne")}
                className={`px-3 py-1.5 text-sm font-medium ${
                  language === "ne" ? "text-antique-gold" : "text-parchment/70"
                }`}
              >
                ने
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
