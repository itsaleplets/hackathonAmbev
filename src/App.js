import './Css/App.css';
import React from 'react';
import BeerProvider from './Context/beerProvider';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BeerProvider>
      <Dashboard />
    </BeerProvider>
  );
}

export default App;
