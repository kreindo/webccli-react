import React from 'react';
import Button from './parts/Button';
import Logo from '../assets/images/logo.png';
import ButtonSign from './parts/ButtonSign';

const header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-section">
          <img src={Logo} alt="logo" />
          <h1>CCLI</h1>
        </div>
      </div>
      <div className="navmenu">
        <Button name="Docs" />
        <Button name="Pricing" />
        <Button name="Github" />
        <Button name="Pricing" />
        <ButtonSign
          name="Sign Up"
          style={{ margin: '48px', whiteSpace: 'nowrap' }}
          class="mbtn-signup"
        />
      </div>
    </div>
  );
};

export default header;
