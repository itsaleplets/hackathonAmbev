import './Css/App.css';
import React from 'react';
import BeerProvider from './Context/beerProvider';
import Dashboard from './Components/Dashboard';
import SplashScreen from './Components/Splashscreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import beerContext from './Context/beerContext';

function App() {

  return (
    <BeerProvider>
      <Dashboard />
    </BeerProvider>
  );
}

export default App;
