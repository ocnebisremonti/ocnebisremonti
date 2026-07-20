'use client'

import React, { useState } from 'react'
import '../styles/Header.css'

const navLinks = [
    { name: 'მთავარი', href: '#' },
     { name: 'ჩვენ შესახებ', href: '#about' },
    { name: 'სერვისები', href: '#services' },
    { name: 'ნამუშევრები', href: '#work' },
    { name: 'კონტაქტი', href: '#contact' },
]

const logo = '/logoo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='header-container'>

    <a href="#" className="logo">
  <img src={logo} alt="remonti logo" className="logo-image" />
</a>

      {/* Desktop nav links */}
      <div className="nav-links-container">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-link">{link.name}</a>
        ))}
      </div>

      {/* Hamburger button - visible only on mobile via CSS */}
      <button
        className={`hamburger-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay - closes menu when clicked outside */}
      {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      {/* Sidebar menu */}
      <div className={`sidebar-menu ${isOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>
        <div className="sidebar-links">
          {navLinks.map((link, index) => (
            
             <a key={index}
              href={link.href}
              className="sidebar-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Header