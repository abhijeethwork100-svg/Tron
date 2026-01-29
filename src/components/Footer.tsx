'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">Prospera</h3>
            <p className="footer-tagline">Purpose. Progress. Prosper.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Projects</h4>
              <Link href="#">AARKA</Link>
              <Link href="#">AYARA</Link>
              <Link href="#">The Estates</Link>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <Link href="#">Resorts</Link>
              <Link href="#">Spa & Wellness</Link>
              <Link href="#">Sports & Fitness</Link>
              <Link href="#">Community Center</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Prospera Group. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
