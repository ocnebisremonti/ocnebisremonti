'use client'

import React, { useEffect, useRef, useState } from 'react'
import '../styles/About.css'

const content = {
  left: {
    header: 'ჩვენ შესახებ',
    aboutText:
      '2019 წლიდან ვქმნით ხარისხიან და თანამედროვე სივრცეებს. ამ დროის განმავლობაში არაერთი წარმატებული პროექტი განვახორციელეთ და წამყვან კომპანიებთან თანამშრომლობით მომხმარებელთა ნდობა მოვიპოვეთ.',
    buttonText: 'იხილეთ სერვისები',
  },
  right: {
    logos: ['/logos/logo1.jpg', '/logos/logo2.png', '/logos/logo3.png'],
    stats: [
      { value: 7, suffix: '+', label: 'წელი ბაზარზე' },
      { value: 100, suffix: '+', label: 'კმაყოფილი მომხმარებელი' },
    ],
  },
}

function StatItem({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const duration = 1500
          const startTime = performance.now()

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function About() {
  return (
    <div className="about-container">
      <h2 className="about-header">{content.left.header}</h2>

      <div className="about-columns">
        <div className="left">
          <p className="about-description">{content.left.aboutText}</p>
          <button className="btn-accent about-btn">
            {content.left.buttonText}
          </button>
        </div>

        <div className="right">
          <div className="stats-container">
            {content.right.stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          <div className="logos-container">
            {content.right.logos.map((logo, index) => (
              <img
                src={logo}
                key={index}
                alt={`partner logo ${index + 1}`}
                className="logo-img"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About