'use client'

import { motion } from 'framer-motion'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', large: true },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', large: false },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', large: false },
  { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80', large: false },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80', large: true }
]

export default function Gallery() {
  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label">Gallery</p>
        <h2 className="section-title-center">A Glimpse Of Luxury.</h2>
      </motion.div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`gallery-item ${image.large ? 'large' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={image.src} alt={`Gallery ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
