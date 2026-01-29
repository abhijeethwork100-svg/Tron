'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Vision from '@/components/Vision'
import Estates from '@/components/Estates'
import Features from '@/components/Features'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Vision />
      <Estates />
      <Features />
      <Projects />
      <Services />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  )
}
