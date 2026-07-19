import React from 'react';
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import DetailedServices from '../components/DetailedServices';
import Work from '../components/Work'
import Cta from '../components/Cta'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ოცნების რემონტი',
    description:
      'პროფესიონალური სარემონტო მომსახურება — ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით.',
    url: 'https://ocnebisremonti.ge',
    telephone: '+995574129334',
    email: 'dream.remonti@mail.ru',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GE',
    },
    areaServed: 'GE',
    sameAs: [
      'https://www.facebook.com/people/Lavani-Home-%E1%83%9A%E1%83%90%E1%83%95%E1%83%90%E1%83%9C%E1%83%98-%E1%83%A1%E1%83%90%E1%83%AE%E1%83%9A%E1%83%98/61555905846393/',
    ],
    priceRange: '$$',
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Landing />
      <About/>
      <Services/>
      <DetailedServices/>
      <Work/>
      <Cta/>
    </div>
  );
}