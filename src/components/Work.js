'use client'

import React from 'react'
import '../styles/Work.css'

const photos = [
  '/work/work1.jpg',
  '/work/work2.jpg',
  '/work/work3.jpg',
  '/work/work4.jpg',
  '/work/work5.jpg',
  '/work/work6.jpg',
  '/work/work7.jpg',
  '/work/work8.jpg',
]

function Work() {
  return (
    <div className="work-container" id="work">
      <h2 className="work-header">ჩვენი ნამუშევრები</h2>

      <div className="work-masonry">
        {photos.map((src, index) => (
          <div key={index} className="work-item">
            <img src={src} alt={`ნამუშევარი ${index + 1}`} className="work-img" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work