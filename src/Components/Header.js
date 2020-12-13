import React from 'react';
import '../Css/App.css'
import logo from '../images/BeerCheckLogoNegativa.svg';

function Header() {

  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />
    </div>
  );
}

export default Header;
