import React from 'react';import Hero from './parts/Hero';
import Frame from '../assets/images/Frame.png';
import Client from '../assets/images/Clients.png';
import AboutUs from './parts/AboutUs';
import OurInterest from './parts/OurInterest';
const content = () => {
  return (
    <div
      style={{
        margin: '0px 260px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <img style={{ width: 'auto' }} src={Frame} alt="frame" />
      </div>
      <div style={{ marginTop: '159px' }}>
        <img style={{ width: 'auto' }} src={Client} alt="frame" />
      </div>
      <div>
        <AboutUs />
        <OurInterest />
      </div>
    </div>
  );
};

export default content;
