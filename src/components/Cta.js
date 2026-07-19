'use client'

import React from 'react'
import { Phone } from 'lucide-react'
import '../styles/Cta.css'

const content = {
  eyebrow: 'რემონტის დაწყება გსურთ?',
  title: 'გააკეთეთ ოცნების რემონტი ჩვენთან ერთად',
  subtitle: 'დაგვირეკეთ დღესვე და ჩვენი გუნდი დაგეხმარებათ თქვენი სივრცის სრულყოფილ გარდაქმნაში — პირველი ნაბიჯიდან საბოლოო შედეგამდე.',
  phone: '+995 555 00 00 00',
}

function Cta() {
  return (
    <div className="cta-container" id='contact'>
      <div className="cta-card">
        <div className="cta-glow cta-glow-1" />
        <div className="cta-glow cta-glow-2" />

        <div className="cta-content">
          <span className="cta-eyebrow">{content.eyebrow}</span>
          <h2 className="cta-title">{content.title}</h2>
          <p className="cta-subtitle">{content.subtitle}</p>

          
           <a href={`tel:${content.phone.replace(/\s/g, '')}`}
            className="cta-button"
          >
            <span className="cta-button-icon">
              <Phone size={20} strokeWidth={2} />
            </span>
            <span>დაგვირეკეთ</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cta