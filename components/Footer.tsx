"use client";

import { Facebook, Mail, MapPin, Phone } from "lucide-react";
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
                <span className="lang-en">Visit Us</span>
                <span className="lang-ne">ठेगाना</span>
              </h3>
            </div>
            <div className="space-y-2 text-parchment/80">
              <p className="text-base sm:text-lg font-semibold">
                <span className="lang-en">Shree Krishna Chaku Production Pvt. Ltd.</span>
                <span className="lang-ne">श्री कृष्ण चाकु प्रोडक्सन प्रा. लि.</span>
              </p>
              <p>
                <span className="lang-en">Tokha-3, Dekwo</span>
                <span className="lang-ne">टोखा-३, देक्वो</span>
              </p>
              <p>
                <span className="lang-en">Kathmandu, Nepal</span>
                <span className="lang-ne">काठमाडौँ, नेपाल</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-6">
              <a
                href="https://maps.app.goo.gl/cE3QnE9E4f8wiuxf9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-parchment px-6 py-3 rounded-none font-semibold transition-all duration-300 text-center whitespace-nowrap border hover:shadow-lg hover:shadow-red-900/20"
                style={{
                  background: "linear-gradient(to bottom, #911a13, #7a150f)",
                  borderWidth: "1px",
                  borderColor: "rgba(212, 175, 55, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to bottom, #a82a1f, #8b1a13)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to bottom, #911a13, #7a150f)";
                }}
              >
                <span className="lang-en">Open in Google Maps</span>
                <span className="lang-ne">गुगल म्याप्समा खोल्नुहोस्</span>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdftlwL_fdx5JvlY_ESCHmx3pDvDL-j8FTexv1vxM_HAr9eGQ/viewform?usp=sharing&ouid=108440557764622866401"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-parchment px-6 py-3 rounded-none font-semibold transition-all duration-300 text-center whitespace-nowrap border hover:shadow-lg hover:shadow-red-900/20"
                style={{
                  background: "linear-gradient(to bottom, #911a13, #7a150f)",
                  borderWidth: "1px",
                  borderColor: "rgba(212, 175, 55, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to bottom, #a82a1f, #8b1a13)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to bottom, #911a13, #7a150f)";
                }}
              >
                <span className="lang-en">Open Inquiry Form</span>
                <span className="lang-ne">सोधपुछ फारम खोल्नुहोस्</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-serif text-xl sm:text-2xl text-parchment mb-6">
                <span className="lang-en">Contact Us</span>
                <span className="lang-ne">सम्पर्क</span>
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
                <span className="lang-en">Follow Our Journey</span>
                <span className="lang-ne">हाम्रो यात्रा अनुसरण गर्नुहोस्</span>
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
                  <svg
                    className="text-parchment/80 hover:text-antique-gold w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Heritage Statement */}
            <div className="pt-6 border-t border-parchment/20">
              <p className="text-parchment/70 text-sm leading-relaxed">
                <span className="lang-en">
                  Associated with the{" "}
                  <a
                    href="https://english.onlinekhabar.com/tokha-bazaar-gears-up-for-maghe-sankranti-to-fulfill-demand-for-chaku.html#:~:text=The%20Chaku%20produced%20here%20is,various%20countries%20around%20the%20world."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-antique-gold font-semibold border-b border-parchment/30 hover:text-hyangu-red hover:border-hyangu-red/70 transition-all duration-300 ease-in-out"
                  >
                    Tokha Traditional Chaku Conservation Society
                  </a>
                </span>
                <span className="lang-ne">
                  {" "}
                  <a
                    href="https://english.onlinekhabar.com/tokha-bazaar-gears-up-for-maghe-sankranti-to-fulfill-demand-for-chaku.html#:~:text=The%20Chaku%20produced%20here%20is,various%20countries%20around%20the%20world."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-antique-gold font-semibold border-b border-parchment/30 hover:text-hyangu-red hover:border-hyangu-red/70 transition-all duration-300 ease-in-out"
                  >
                    टोखा परम्परागत चाकु संरक्षण समाज
                  </a>
                  {" "}मा आबद्ध
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="border-t border-parchment/20 pt-8 text-center">
          <p className="heading-serif text-xl text-antique-gold mb-2">
            <span className="lang-en text-xl font-semibold">Bringing the golden legacy of Tokha to every Nepali table.</span>
            <span className="lang-ne">श्री पशुपतिनाथ शरणम्</span>
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
