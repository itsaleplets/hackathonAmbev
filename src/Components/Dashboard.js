import React, { useContext } from 'react';
import '../Css/App.css'
import Measurement from './Measurement';
import Header from './Header';
import UpdateSensor from './UpdateSensor';
import beerContext from '../Context/beerContext';
import SplashScreen from './Splashscreen';

function Dashboard() {
   const { splashScreen, showSplashScreen } = useContext(beerContext);
   setTimeout(() => {
    showSplashScreen();
  }, 4000);

  return (
    <div>
      { splashScreen ? <SplashScreen /> :
      <div>
        <Header />
        <UpdateSensor />
        <Measurement />
      </div>
      }
    </div>
  );
}

export default Dashboard;
