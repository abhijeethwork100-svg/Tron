'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="section section-about" id="about">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-label">About Prospera</p>
        <h2 className="section-title">
          A Modern Luxury Conglomerate Shaping The Future Of Real Estate, Wellness, And Lifestyle In India.
        </h2>
      </motion.div>
    </section>
  )
}
