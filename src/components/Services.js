'use client'

import React from 'react'
import '../styles/Services.css'

const content = {
  header: {
    title: 'სერვისები',
  },
  services: [
    {
      title: 'თეთრი ᲙᲐᲠᲙᲐᲡᲘᲡ ᲠᲔᲛᲝᲜᲢᲘ',
      num: '02',
      img: '/services/service1.jpg',
      description: 'შიდა კედლები აშენებული, კომუნიკაციები შეყვანილი, მზადაა საფინიშე სამუშაოებისთვის.',
    },
    {
      title: 'კოსმეტიკური რემონტი',
      num: '03',
      img: '/services/service3.jpg',
      description: 'ბინის განახლება სწრაფად და ხარისხიანად.',
    },
    {
      title: 'ᲨᲐᲕᲘ ᲙᲐᲠᲙᲐᲡᲘᲡ ᲠᲔᲛᲝᲜᲢᲘ',
      num: '01',
      img: '/services/service2.jpg',
      description: 'მხოლოდ მზიდი კონსტრუქცია, საჭიროა ყველა სამუშაოს ნულიდან შესრულება.',
    },
    {
      title: 'ინტერიერის დიზაინი',
      num: '04',
      img: '/services/service4.jpg',
      description: 'ინდივიდუალური დიზაინ-პროექტი თქვენი სივრცისთვის.',
    },
    {
      title: 'ავეჯის დამზადება',
      num: '05',
      img: '/services/service5.jpg',
      description: 'ავეჯის დამზადება ზომებზე მორგებით.',
    },
  ],
}

// bento layout classes, გამოყოფილი content-ისგან
const bentoClasses = [
  'col-span-2 row-span-2', // 1
  'col-span-2',            // 2
  'col-span-2 row-span-2', // 3
  '',                      // 4
  '',                      // 5
]

function Services() {
  return (
    <div className="services-container" id='services'>
      <h2 className="service-header">{content.header.title}</h2>

      <div className="bento-container">
        {content.services.map((service, index) => (
          <div
            key={service.num}
            className={`bento-item ${bentoClasses[index]}`}
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <span className="bento-num">{service.num}</span>
            <div className="bento-content">
              <h3 className="bento-title">{service.title}</h3>
              <p className="bento-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services