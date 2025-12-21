"use client";

import { getAssetPath } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ne">("ne");
  const desktopToggleRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLDivElement>(null);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "ne" | null;
    // Default to Nepali if no saved language or if saved language is 'ne'
    // Only use English if explicitly set to 'en'
    if (savedLanguage === "en") {
      setLanguage("en");
      document.body.classList.remove("nepali-mode");
    } else {
      // Default to Nepali (null or 'ne')
      setLanguage("ne");
      document.body.classList.add("nepali-mode");
      if (!savedLanguage) {
        localStorage.setItem("language", "ne");
      }
    }
  }, []);

  // Add initial glow animation to toggle buttons
  useEffect(() => {
    const addGlow = () => {
      if (desktopToggleRef.current) {
        desktopToggleRef.current.classList.add("initial-glow");
      }
      if (mobileToggleRef.current) {
        mobileToggleRef.current.classList.add("initial-glow");
      }
    };

    const removeGlow = () => {
      if (desktopToggleRef.current) {
        desktopToggleRef.current.classList.remove("initial-glow");
      }
      if (mobileToggleRef.current) {
        mobileToggleRef.current.classList.remove("initial-glow");
      }
    };

    // Add glow on mount
    addGlow();

    // Remove glow after 6 seconds
    const timer = setTimeout(() => {
      removeGlow();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Handle language toggle
  const handleLanguageChange = (lang: "en" | "ne") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    if (lang === "ne") {
      document.body.classList.add("nepali-mode");
    } else {
      document.body.classList.remove("nepali-mode");
    }
  };

  const navItems = [
    { en: "Our Story", ne: "हाम्रो कथा", id: "lineage" },
    { en: "Products", ne: "उत्पादनहरू", id: "products" },
    { en: "Tokha Chronicles", ne: "टोखा वृत्तान्त", id: "chronicles" },
    { en: "Contact Us", ne: "सम्पर्क", id: "footer" },
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
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-masi-black relative shadow-lg will-change-transform"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      {/* Simple red border - thicker */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-hyangu-red"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Horizontal Logo Lockup */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 focus:outline-none flex-shrink-0"
          >
            {/* Logo - enhanced visibility on dark background */}
            <div className="relative h-12 sm:h-12 md:h-14 w-auto">
              <Image
                src={getAssetPath("/GoldLogo.jpeg")}
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
              <span className="lang-en whitespace-nowrap text-sm sm:text-lg md:text-xl lg:text-2xl">
                <span className="inline">Shree Krishna </span>
                <span className="inline">Tokha Chaku</span>
              </span>
              <span className="lang-ne whitespace-nowrap text-sm sm:text-lg md:text-xl lg:text-2xl">
                <span className="inline">श्री कृष्ण </span>
                <span className="inline">टोखा चाकु</span>
              </span>
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

            {/* Language Toggle - Desktop */}
            <div ref={desktopToggleRef} className="flex items-center space-x-1 border-l border-parchment/20 pl-4 ml-4">
              <button
                onClick={() => handleLanguageChange("en")}
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
                onClick={() => handleLanguageChange("ne")}
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

          {/* Mobile: Language Toggle + Hamburger Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Toggle - Mobile */}
            <div ref={mobileToggleRef} className="flex items-center space-x-1">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-1.5 text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-antique-gold"
                    : "text-parchment/70 hover:text-parchment"
                }`}
              >
                EN
              </button>
              <span className="text-parchment/40">|</span>
              <button
                onClick={() => handleLanguageChange("ne")}
                className={`px-2 py-1.5 text-sm font-medium transition-colors ${
                  language === "ne"
                    ? "text-antique-gold"
                    : "text-parchment/70 hover:text-parchment"
                }`}
              >
                ने
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="transition-colors duration-300 text-antique-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
