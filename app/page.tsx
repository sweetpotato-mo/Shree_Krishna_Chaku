'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TheLineage from '@/components/TheLineage'
import ProductShowcase from '@/components/ProductShowcase'
import TokhaChronicles from '@/components/TokhaChronicles'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment">
      <Navigation />
      <Hero />
      <TheLineage />
      <ProductShowcase />
      <TokhaChronicles />
      <Footer />
    </main>
  )
}
