'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    label: 'Holistic Wellness & Rehabilitation',
    title: 'AARKA',
    description: 'A sanctuary dedicated to complete wellness and rehabilitation, designed to heal both body and mind.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    reverse: false
  },
  {
    label: 'Luxury Resort & Stay',
    title: 'AYARA',
    description: 'Experience luxury redefined with world-class amenities, stunning architecture, and impeccable service.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80',
    reverse: true
  },
  {
    label: 'Modern Luxury Inclusive Township',
    title: 'The Estates',
    description: "India's first all-inclusive wellness community where generations live, heal, and prosper together.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    reverse: false
  }
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p className="section-label">Our Projects</p>
        <h2 className="section-title-center">The Most Thoughtful Spaces Ever Built.</h2>
        <p className="section-subtitle">
          The harmonious blend of wellness & healthcare, adventure, resort & staycation, and the permanent solution to peaceful luxury.
        </p>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className={`project-card ${project.reverse ? 'reverse' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <p className="project-label">{project.label}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <Link href="#" className="project-link">
              Learn more →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
