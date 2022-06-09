import React from 'react';
import Hero from './parts/Hero';
import Frame from '../assets/images/Frame.png';
import Client from '../assets/images/Clients.png';
const content = () => {
  return (
    <div
      style={{
        margin: '0px 120px',
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
        <img src={Frame} alt="frame" />
      </div>
      <div style={{ marginTop: '159px' }}>
        <img style={{ marginLeft: '203px' }} src={Client} alt="frame" />
      </div>
    </div>
  );
};

export default content;
