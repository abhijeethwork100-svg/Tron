'use client'

import { motion } from 'framer-motion'

export default function Estates() {
  return (
    <section className="section-estates" id="estates">
      <div className="estates-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">The Estates</p>
          <h2 className="estates-title">India's First All-Inclusive Wellness Community.</h2>
          <p className="estates-description">
            A serene, barrier-free haven blending high-quality healthcare, assisted living, and holistic well-being with sustainable luxury.
          </p>
          <p className="estates-location">Just 60 minutes from Hyderabad</p>
        </motion.div>
      </div>
      <motion.div
        className="estates-image"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="The Estates"
        />
      </motion.div>
    </section>
  )
}
