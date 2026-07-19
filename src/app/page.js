
import React from 'react';
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import DetailedServices from '../components/DetailedServices';
import Cta from '../components/Cta'

export default function Home() {
  return (
    <div>
      <Landing />
      <About/>
      <Services/>
      <DetailedServices/>
      <Cta/>
      
    </div>
  );
}
