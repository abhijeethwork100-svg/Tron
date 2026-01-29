'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>Prospera</Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#estates">The Estates</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <Link href="#about" onClick={() => setOpen(false)}>About</Link>
        <Link href="#estates" onClick={() => setOpen(false)}>The Estates</Link>
        <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}
