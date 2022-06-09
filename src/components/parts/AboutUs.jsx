import React from 'react';
import AbImg from '../../assets/images/AboutUs.png';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', marginTop: '140px' }}>
      <div>
        <img src={AbImg} alt="" />
      </div>
      <div>
        <div
          style={{ color: '#2B2B2B', marginTop: '100px' }}
          className="hero-top"
        >
          About Us
        </div>
        <div style={{ display: 'flex' }}>
          <p
            style={{
              color: '#5B5B5B',
              wordWrap: 'normal',
              marginTop: '36px',
              lineHeight: '32.4px',
              whiteSpace: 'nowrap',
            }}
          >
            Lorem ipsum is placeholder text commonly used in the graphic,
            <br />
            print, and publishing industries for previewing
            <br />
            layouts and visual mockups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
