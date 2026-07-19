'use client'

import React from 'react'
import '../styles/Work.css'

const photos = [
  '/work/work1.jpeg',
  '/work/work2.jpeg',
  '/work/work3.jpeg',
  '/work/work4.jpeg',
  '/work/work5.jpeg',
  '/work/work6.jpeg',
  '/work/work7.jpeg',
  '/work/work8.jpeg',
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