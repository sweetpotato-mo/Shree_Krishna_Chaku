"use client";

import { getAssetPath } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>("/chaku-pulling.mp4");
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      setShowFallback(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Set video source based on environment
    setVideoSrc(getAssetPath("/chaku-pulling.mp4"));
  }, []);

  useEffect(() => {
    // Ensure video plays on mobile devices
    const video = videoRef.current;
    if (video) {
      // Handle video errors
      const handleError = (e: Event) => {
        console.error("Video error:", e);
        const videoElement = e.target as HTMLVideoElement;
        if (videoElement.error) {
          console.error("Video error code:", videoElement.error.code);
          console.error("Video error message:", videoElement.error.message);
        }
      };

      // Try to play immediately
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
      }

      // Also try to play when video data is loaded (helps on mobile)
      const handleLoadedData = () => {
        if (video) {
          video.play().catch(() => {
            // Silently fail if autoplay is blocked
          });
        }
      };

      // Handle when video can start playing
      const handleCanPlay = () => {
        if (video) {
          video.play().catch(() => {
            // Silently fail if autoplay is blocked
          });
        }
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("lineage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image for mobile or when video fails */}
        {showFallback ? (
          <div
            className="w-full h-full object-cover relative z-0"
            style={{
              backgroundImage: `url(${getAssetPath("/chaku-pulling.png")})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.75) contrast(1.1) sepia(0.1)",
            }}
          />
        ) : (
        <video
            ref={videoRef}
            src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full h-full object-cover relative z-0"
            style={{
              filter: "brightness(0.75) contrast(1.1) sepia(0.1)",
            }}
            onError={(e) => {
              console.error("Video failed to load:", e);
              const videoElement = e.currentTarget;
              if (videoElement.error) {
                console.error("Video error code:", videoElement.error.code);
                console.error(
                  "Video error message:",
                  videoElement.error.message
                );
              }
              // Show fallback image on error
              setShowFallback(true);
            }}
            onLoadedMetadata={() => {
              console.log("Video metadata loaded, source:", videoSrc);
            }}
          >
            Your browser does not support the video tag.
        </video>
        )}
        {/* Fallback gradient background for when video doesn't load - behind video */}
        <div className="absolute inset-0 bg-gradient-to-br from-masi-black via-hyangu-red to-masi-black -z-10" />
        {/* Overlay gradient on top of video for visual effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-masi-black/40 via-transparent to-parchment/60 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-parchment mb-6 leading-tight">
            <span className="lang-en">
              Tokha&apos;s Heritage,
              <br />
              <span className="text-antique-gold">
                Refined Over Four Generations
              </span>
            </span>
            <span className="lang-ne">
              टोखाको मौलिकता,
              <br />
              <span className="text-antique-gold">
                चार पुस्ताको पौरख
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-parchment/90 mb-12 font-light">
            <span className="lang-en">A 4th-generation artisanal tradition from Tokha-3, Dekwo, Kathmandu</span>
            <span className="lang-ne">पुस्तौंदेखि जोगाउँदै ल्याइएको टोखा-३, देक्वोको रैथाने कला</span>
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToNext}
              className="px-8 py-4 bg-hyangu-red text-parchment rounded-none border-2 border-parchment hover:bg-parchment hover:text-hyangu-red transition-all duration-300 font-semibold text-lg tracking-wide"
            >
              <span className="lang-en">Explore the Lineage</span>
              <span className="lang-ne">हाम्रो कथा</span>
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent text-parchment rounded-none border-2 border-parchment/70 hover:border-parchment hover:bg-parchment/10 transition-all duration-300 font-semibold text-lg tracking-wide"
            >
              <span className="lang-en">Contact Us</span>
              <span className="lang-ne">सम्पर्क</span>
            </button>
          </div>
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
  );
};

export default Hero;
