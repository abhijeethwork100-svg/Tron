'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section section-cta" id="contact">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">Get A Complimentary Site Visit.</h2>
        <p className="cta-subtitle">Discover what it truly means to live with purpose, peace, and prestige.</p>
        <p className="cta-description">
          Take a private tour through The Estates. Our visionary luxury township where wellness, community, and nature co-exist in harmony.
        </p>
        <Link href="#" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1.25rem 2.5rem' }}>
          Book Now
        </Link>
        <p className="cta-note">*Site visits are based on eligibility</p>
      </motion.div>
    </section>
  )
}
