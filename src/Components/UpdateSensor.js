import React, { useContext } from 'react';
import beerContext from '../Context/beerContext';
import '../Css/App.css'

function UpdateSensor() {
  const { apiResult, fetch } = useContext(beerContext);
  
  const handleClick = () => {
    fetch();
  }

  return (
    <div className="sensor">
        <div className="div-id">
          <h1 className="h1-title">#ID Sensor</h1>
          <span>Última atualização: {apiResult.date} | às {apiResult.time}</span>
        </div>
        <div className="div-btn">
        <button onClick={ () => handleClick() } id="btn" type="button" className="btn btn-primary-outline">ATUALIZAR SENSORES</button>
        </div>
    </div>
  );
}

export default UpdateSensor;
