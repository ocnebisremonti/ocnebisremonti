'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Landing.css'

const content = [
  { heading: 'სრული სარემონტო მომსახურება' },
  { description: 'თქვენი სივრცის სრულყოფილი გარდაქმნა  პროფესიონალი გუნდის მიერ - ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით, თანამედროვე სტანდარტებით და თითოეულ დეტალზე ზრუნვით.' }
]

function Landing() {
  const containerRef = useRef(null)
  const buttonsRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const buttons = buttonsRef.current
    const path = pathRef.current
    if (!container || !buttons || !path) return

    const update = () => {
      const isMobile = window.matchMedia('(max-width: 1024px)').matches
      if (isMobile) return // ტაბლეტზე/მობაილზე clip-path გათიშულია CSS-ით

      const w = container.clientWidth
      const h = container.clientHeight
      const btnW = buttons.offsetWidth
      const btnH = buttons.offsetHeight
      if (!w || !h || !btnW || !btnH) return

      const gapX = 30 // px დაშორება ღილაკებსა და notch-ის მარჯვენა კიდეს შორის
      const gapY = 10 // px დაშორება ღილაკებსა და notch-ის ზედა კიდეს შორის

      const R = 32 // გარე კუთხის რადიუსი px-ში (2rem)
      const r = 25 // notch-ის კუთხის რადიუსი px-ში (1rem)

      const x0 = btnW + gapX
      const yTop = h - (btnH + gapY)

      // ყველა კოორდინატი პირდაპირ px-შია — radius აღარ იცვლება aspect ratio-ს მიხედვით
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

      <div className="landing-wrapper">
        <div className="landing-frame">
          <div className="landing-container" ref={containerRef}>
            <div className="landing-content">
              <h1 className="landing-heading">{content[0].heading}</h1>
              <p className="landing-description">{content[1].description}</p>
            </div>
          </div>

          <div className="landing-buttons" ref={buttonsRef}>
            <button className="btn-dark">იხილეთ სერვისები</button>
            <button className="btn-accent">დაგვიკავშირდით</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing