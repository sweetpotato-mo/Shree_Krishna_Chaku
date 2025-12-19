# Shree Krishna Chaku - Heritage Landing Page

A premium, story-first landing page for Shree Krishna Chaku Production Pvt. Ltd., a 4th-generation artisanal brand from Tokha-3, Dekwo, Kathmandu.

## 🎨 Design Philosophy

**Heritage Modernism** - A digital museum and product catalog that celebrates traditional Newari craftsmanship through modern web design.

### Visual Identity

- **Primary Color**: Hyangu-Red (#8B0000) - from the official letterhead
- **Secondary Color**: Masi-Black (#1A1A1A) - traditional ink and Newari Haku Patasi
- **Background**: Aged Parchment/Cream (#F9F6F0) - handmade Lokta paper
- **Accent**: Antique Gold (#D4AF37) - divine heritage

### Typography

- **Headings**: Playfair Display (Serif) with Mukta for Nepali text
- **Body**: Georgia/Times New Roman style for historical record feel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Navigation.tsx       # Glassmorphism nav with language toggle
│   ├── Hero.tsx             # Hero section with video background
│   ├── TheLineage.tsx       # Our Story section
│   ├── ProductShowcase.tsx  # Product gallery (4 varieties)
│   ├── TokhaChronicles.tsx  # Journal/chapters layout
│   ├── Footer.tsx           # Contact and location
│   └── TikiJhyaPattern.tsx  # Traditional lattice pattern SVG
└── public/                  # Static assets (images, videos)
```

## 🎬 Features

- **Smooth Scroll Animations**: Framer Motion "molasses-like" animations
- **Story-First Design**: Book-like reading experience
- **Bilingual Support**: English/Nepali language toggle
- **Mobile Optimized**: Responsive design for all devices
- **Glassmorphism Navigation**: Modern transparent navigation
- **Traditional Patterns**: Tiki Jhyā (lattice window) SVG overlays

## 📝 Content Placeholders

The following assets need to be added to the `public/` directory:

- `/chaku-pulling.mp4` - Hero section video
- `/factory-tokha.jpg` - Factory image for The Lineage section
- `/sada-chaku.jpg` - Sada Chaku product image
- `/masala-chaku.jpg` - Masala Chaku product image
- `/khuwa-chaku.jpg` - Khuwa Chaku product image
- `/sutkeri-chaku.jpg` - Sutkeri Chaku product image
- `/placeholder-chaku.jpg` - Fallback product image

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📱 Sections

1. **Navigation**: Sticky glassmorphism nav with smooth scroll
2. **Hero**: Cinematic video background with call-to-action
3. **The Lineage**: Split-screen story section
4. **Product Showcase**: Gallery of 4 Chaku varieties
5. **Tokha Chronicles**: Journal entries/chapters
6. **Footer**: Contact info, map, and social links

## 🎯 Key Design Elements

- Double-line border (thick red + thin black) on header
- Tiki Jhyā pattern overlays for section dividers
- No e-commerce patterns (no carts, prices, buy buttons)
- "Discover the Ritual" buttons instead of purchase CTAs
- Purity badge: "Traditionally Crafted. SO2 Free. No Added Colors or Preservatives."

## 📞 Contact Information

- **Phone**: 01-5110124
- **Location**: Tokha-3, Dekwo, Kathmandu
- **Member**: Tokha Traditional Chaku Protection Society

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2024 Shree Krishna Chaku Production Pvt. Ltd. All rights reserved.

---

_Dedicated to your service for four generations._
