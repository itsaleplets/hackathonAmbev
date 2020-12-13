import React from 'react';
import '../Css/App.css'
import logo from '../images/BeerCheckLogo.svg';
import wave1 from '../images/wave.svg';
import wave2 from '../images/wave2.svg';

function SplashScreen() {

  return (
    <div className="fade-in">
      <div className="splash-div">
        <img className="splash-logo" alt="logo" src={logo} />
        <p className="splash-title1">Uma boa cerveja</p>
        <p className="splash-title2">sempre na medida certa</p>
      </div>
      <img className="splash-wave1" alt="yellow wave" src={wave1} />
      <img className="splash-wave2" alt="yellow wave" src={wave2} />
    </div>
  );
  
}

export default SplashScreen;
