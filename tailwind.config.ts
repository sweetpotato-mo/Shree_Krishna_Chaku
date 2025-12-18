import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hyangu-red": "#8B0000",
        "masi-black": "#1A1A1A",
        parchment: "#F5F2EA",
        "antique-gold": "#D4AF37",
      },
      fontFamily: {
        "serif-heading": ["Playfair Display", "serif"],
        nepali: ["Mukta", "sans-serif"],
        body: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
