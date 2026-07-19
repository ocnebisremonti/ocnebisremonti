'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Work.css'

const sliders = [
  ['/work/work1.jpg', '/work/work2.jpg', '/work/work3.jpg', '/work/work4.jpg'],
  ['/work/work21.jpg', '/work/work22.jpg', '/work/work23.jpg'],
  ['/work/work31.jpg', '/work/work32.jpg', '/work/work33.jpg'],
]

function Slider({ photos, onImageClick }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1))

  return (
    <div className="slider">
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {photos.map((src, index) => (
            <div
              key={index}
              className="slider-item"
              onClick={() => onImageClick(src)}
            >
              <img src={src} alt={`ნამუშევარი ${index + 1}`} className="slider-img" />
            </div>
          ))}
        </div>
      </div>

      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="წინა">
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="შემდეგი">
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      <div className="slider-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`ფოტო ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function Work() {
  const [lightboxImg, setLightboxImg] = useState(null)

  const openLightbox = (src) => setLightboxImg(src)
  const closeLightbox = () => setLightboxImg(null)

  return (
    <div className="work-container" id="work">
      <h2 className="work-header">ჩვენი ნამუშევრები</h2>

      <div className="work-sliders">
        {sliders.map((photos, index) => (
          <Slider key={index} photos={photos} onImageClick={openLightbox} />
        ))}
      </div>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="დახურვა">
            ✕
          </button>
          <img
            src={lightboxImg}
            alt="გადიდებული ფოტო"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Work