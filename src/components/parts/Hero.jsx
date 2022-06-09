import React from 'react';import ButtonSign from './ButtonSign';

const Hero = () => {
  return (
    <div>
      <div style={{ marginTop: '100px' }} className="hero-top">
        The only
        <br />
        CLI <span style={{ color: '#FF6600' }}>module</span>
        <br />
        you need
      </div>
      <div style={{ display: 'flex' }}>
        <p
          style={{
            color: '#5B5B5B',
            whiteSpace: 'nowrap',
            marginTop: '36px',
            lineHeight: '32.4px',
          }}
        >
          Lorem ipsum is placeholder text commonly used in the graphic,
          <br />
          print, and publishing industries for previewing
          <br />
          layouts and visual mockups.
        </p>
      </div>
      <div style={{ marginTop: 74 }}>
        <ButtonSign
          style={{ marginRight: '32px' }}
          name="Get Started"
          class="mbtn-hero"
        />
        <ButtonSign
          style={{
            border: '1px solid #FF6600',
            backgroundColor: '#fafafa',
            color: '#2B2B2B',
          }}
          name="Learn More"
          class="mbtn-hero "
        />
      </div>
    </div>
  );
};

export default Hero;
