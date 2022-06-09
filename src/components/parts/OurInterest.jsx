import React from 'react';import IntCard from './IntCard';
const OurInterest = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '160px',
      }}
    >
      <div
        style={{
          color: '#2B2B2B',
          fontWeight: '800',
          fontSize: '56px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        Our Goals
      </div>
      <div style={{ display: 'flex' }}>
        <p
          style={{
            whiteSpace: 'nowrap',
            color: '#5B5B5B',
            textAlign: 'center',
          }}
        >
          Lorem ipsum is placeholder text commonly used in the graphic,
          <br />
          print, and publishing industries for previewing
          <br />
          layouts and visual mockups.
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <IntCard />
        <IntCard />
        <IntCard />
      </div>
    </div>
  );
};

export default OurInterest;
