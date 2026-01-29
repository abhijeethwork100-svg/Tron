'use client'

import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="section section-vision">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="quote-text">
          "Prospera is a personal commitment to redefine what luxury can mean. From generational wellness to community living, our mission is to create the most peaceful, and beautiful projects across India."
        </p>
        <p className="quote-author">Challa</p>
        <p className="quote-title">Founder, Prospera Group</p>
      </motion.div>
    </section>
  )
}
