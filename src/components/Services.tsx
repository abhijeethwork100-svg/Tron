'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Resorts', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80' },
  { title: 'Spa & Wellness', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80' },
  { title: 'Sports & Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
  { title: 'Community Center', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' }
]

export default function Services() {
  return (
    <section className="section section-services" id="services">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label">Our Services</p>
        <h2 className="section-title-center">State-Of-The-Art Facilities.</h2>
        <p className="section-subtitle">
          Inspired by peaceful Indian living, our integrated spaces combine heritage values with modern sustainable design.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
