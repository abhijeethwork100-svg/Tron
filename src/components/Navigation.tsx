'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

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
        <Link href="/" className="nav-logo">Prospera</Link>
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#estates">The Estates</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
