'use client'

import React from 'react'
import { Mail, Phone } from 'lucide-react'
import '../styles/Footer.css'

const logo = '/logoo.png'

const navLinks = [
  { name: 'მთავარი', href: '#' },
  { name: 'ჩვენ შესახებ', href: '#about' },
  { name: 'სერვისები', href: '#services' },
  { name: 'ნამუშევრები', href: '#work' },
  { name: 'კონტაქტი', href: '#contact' },
]

const contact = {
  facebook: 'https://www.facebook.com/people/Lavani-Home-%E1%83%9A%E1%83%90%E1%83%95%E1%83%90%E1%83%9C%E1%83%98-%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%98/61555905846393/',
  email: 'dream.remonti@mail.ru',
  phone: '+995 574 12 93 34',
  phones: ['+995 574 12 93 34','+995 571 390 510']

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

function WhatsAppIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.19-1.58-1.19-3.01s.74-2.13 1-2.42c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.13.07.71-.17 1.39Z" />
    </svg>
  )
}

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-glow" />

      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="ocnebis saxlis logo" className="footer-logo-img" />
          </div>
          <div className="footer-logo-line" />
          <p className="footer-tagline">
            თქვენი სივრცის სრულყოფილი გარდაქმნა პროფესიონალი გუნდის მიერ -
            გააკეთეთ ოცნების რემონტი ჩვენთან ერთად.
          </p>

          <div className="footer-socials">
            
             <a href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            
            <a  href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
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

  {contact.phones.map((phone, index) => (
    
    <a  key={index}
      href={`tel:${phone.replace(/\s/g, '')}`}
      className="footer-contact-item"
    >
      <Phone size={16} strokeWidth={2} />
      <span>{phone}</span>
    </a>
  ))}

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