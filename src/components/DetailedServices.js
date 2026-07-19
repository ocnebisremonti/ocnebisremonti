'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import '../styles/DetailedServices.css'

const content = {
  header: {
    title: 'სერვისების დეტალური აღწერა',
  },
  services: [
    {
      num: '01',
      title: 'ᲨᲐᲕᲘ ᲙᲐᲠᲙᲐᲡᲘᲡ ᲠᲔᲛᲝᲜᲢᲘ',
      price: '500 ₾-დან / მ²',
      description: 'შავი კარკასის ხელობა — მხოლოდ მზიდი კონსტრუქცია, საჭიროა ყველა სამუშაოს ნულიდან შესრულება.',
      items: [
        'შიდა კედლების აშენება (ბლოკი / თაბაშირმუყაო)',
        'ელექტროგაყვანილობა ნულიდან',
        'სანტექნიკა და კანალიზაცია ნულიდან',
        'გათბობის სისტემის მონტაჟი',
        'ლესვა, შპაკლი და მოსწორება',
        'სტიაჟკა და იატაკის მოწყობა',
        'სააბაზანო ოთახის სრული მოწყობა',
        'შეღებვა / ტაპეტი / დეკორატიული საფარი',
        'კარები, ფანჯრები, ჭერი, განათება',
      ],
    },
    {
      num: '02',
      title: 'ᲗᲔᲗᲠᲘ ᲙᲐᲠᲙᲐᲡᲘᲡ ᲠᲔᲛᲝᲜᲢᲘ',
      price: '400 ₾-დან / მ²',
      description: 'თეთრი კარკასი — შიდა კედლები აშენებული, კომუნიკაციები შეყვანილი, მზადაა საფინიშე სამუშაოებისთვის.',
      items: [
        'კედლებისა და ჭერის ლესვა / შპაკლი',
        'ელექტროგაყვანილობის დაფარვა',
        'სანტექნიკის დაფარვა და მონტაჟი',
        'იატაკის მოწყობა (სტიაჟკა, ლამინატი, კაფელი)',
        'კედლების შეღებვა / ტაპეტის გაკვრა',
        'სააბაზანო ოთახის სრული მოწყობა',
        'კარებისა და ფანჯრების მონტაჟი',
        'ჭერის მოწყობა და განათება',
      ],
    },
    {
      num: '03',
      title: 'ᲙᲝᲡᲛᲔᲢᲘᲙᲣᲠᲘ ᲠᲔᲛᲝᲜᲢᲘ',
      price: null,
      description: 'ბინის განახლება სწრაფად და ხარისხიანად.',
      items: [
        'კედლების გასწორება',
        'შპაკლი / ლესვა',
        'შეღებვა',
        'იატაკის შეცვლა',
        'მცირე სარემონტო სამუშაოები',
      ],
    },
  ],
}

function ServiceRow({ service, isOpen, onToggle }) {
  return (
    <div className={`ds-row ${isOpen ? 'is-open' : ''}`}>
      <button className="ds-row-header" onClick={onToggle}>
        <span className="ds-num">{service.num}</span>
        <span className="ds-title">{service.title}</span>
        {service.price && <span className="ds-price">{service.price}</span>}
        <ChevronDown className="ds-chevron" size={22} strokeWidth={2} />
      </button>

      <div className="ds-row-body">
        <div className="ds-row-body-inner">
          <p className="ds-description">{service.description}</p>
          <ul className="ds-items">
            {service.items.map((item, i) => (
              <li key={i} className="ds-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DetailedServices() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="ds-container">
      <h2 className="ds-header">{content.header.title}</h2>

      <div className="ds-list">
        {content.services.map((service, index) => (
          <ServiceRow
            key={service.num}
            service={service}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  )
}

export default DetailedServices