'use client'

import React from 'react'
import { Mail, Phone } from 'lucide-react'
import '../styles/Footer.css'

const logo = '/logoo.png'


const navLinks = [
  { name: 'მთავარი', href: '#' },
  { name: 'ჩვენ შესახებ', href: '#' },
  { name: 'სერვისები', href: '#' },
  { name: 'ნამუშევრები', href: '#' },
  { name: 'კონტაქტი', href: '#' },
]

const contact = {
  facebook: 'https://www.facebook.com/people/Lavani-Home-%E1%83%9A%E1%83%90%E1%83%95%E1%83%90%E1%83%9C%E1%83%98-%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%98/61555905846393/',
  email: 'info@remont.ge',
  phone: '+995 574 12 93 34',
}

function FacebookIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-glow" />

      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo"><img src={logo} alt="ocnebis saxlis logo" className='footer-logo-img' /></div>
          <div className="footer-logo-line" />
          <p className="footer-tagline">
            თქვენი სივრცის სრულყოფილი გარდაქმნა პროფესიონალი გუნდის მიერ -
            გააკეთეთ ოცნების რემონტი ჩვენთან ერთად.
          </p>

          <div className="footer-socials">
            
            <a  href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <span className="footer-col-label">ნავიგაცია</span>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="footer-nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <span className="footer-col-label">კონტაქტი</span>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-contact-item">
            <Phone size={16} strokeWidth={2} />
            <span>{contact.phone}</span>
          </a>
          <a href={`mailto:${contact.email}`} className="footer-contact-item">
            <Mail size={16} strokeWidth={2} />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Remont. ყველა უფლება დაცულია.
        </span>
        
         <a href="https://apollocreations.net"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          Developed and designed by Apollo Creations
        </a>
      </div>
    </div>
  )
}

export default Footer