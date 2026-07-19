'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/Landing.css'

const content = [
  { heading: 'სრული სარემონტო მომსახურება' },
  { description: 'თქვენი სივრცის სრულყოფილი გარდაქმნა  პროფესიონალი გუნდის მიერ - ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით, თანამედროვე სტანდარტებით და თითოეულ დეტალზე ზრუნვით.' }
]

const backgrounds = ['/landing/landing-bg.jpg', '/landing/landing-bg2.jpg', '/landing/landing-bg3.jpg']

function Landing() {
  const containerRef = useRef(null)
  const buttonsRef = useRef(null)
  const pathRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Background slideshow — crossfade ყოველ 6 წამში
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgrounds.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const buttons = buttonsRef.current
    const path = pathRef.current
    if (!container || !buttons || !path) return

    const update = () => {
      const isMobile = window.matchMedia('(max-width: 1024px)').matches
      if (isMobile) return

      const w = container.clientWidth
      const h = container.clientHeight
      const btnW = buttons.offsetWidth
      const btnH = buttons.offsetHeight
      if (!w || !h || !btnW || !btnH) return

      const gapX = 30
      const gapY = 10

      const R = 32
      const r = 25

      const x0 = btnW + gapX
      const yTop = h - (btnH + gapY)

      const d = `M${R},0H${w - R}A${R},${R},0,0,1,${w},${R}V${h - R}A${R},${R},0,0,1,${w - R},${h}H${x0}A${r},${r},0,0,1,${x0 - r},${h - r}V${yTop + r}A${r},${r},0,0,0,${x0 - 2 * r},${yTop}H${r}A${r},${r},0,0,1,0,${yTop - r}V${R}A${R},${R},0,0,1,${R},0Z`

      path.setAttribute('d', d)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    ro.observe(buttons)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', position: 'absolute' }} width="0" height="0">
        <defs>
          <clipPath id="landing-clip" clipPathUnits="userSpaceOnUse">
            <path ref={pathRef} d="" />
          </clipPath>
        </defs>
      </svg>

      <div className="landing-wrapper" id="main">
        <div className="landing-frame">
          <div className="landing-container" ref={containerRef}>

            {/* Background slideshow layers */}
            {backgrounds.map((bg, index) => (
              <div
                key={bg}
                className={`landing-bg-layer ${index === activeIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${bg})` }}
              />
            ))}

            {/* მუქი overlay ტექსტის წასაკითხად */}
            <div className="landing-overlay" />

            <div className="landing-content">
              <h1 className="landing-heading">{content[0].heading}</h1>
              <p className="landing-description">{content[1].description}</p>
            </div>
          </div>

        <div className="landing-buttons" ref={buttonsRef}>
  <a href="#services" className="btn-dark">იხილეთ სერვისები</a>
  <a href="tel:+995574129334" className="btn-accent">დაგვიკავშირდით</a>
</div>
        </div>
      </div>
    </>
  )
}

export default Landing