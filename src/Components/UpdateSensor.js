import React, { useContext } from 'react';
import beerContext from '../Context/beerContext';
import '../Css/App.css'

function UpdateSensor() {
  const { data } = useContext(beerContext);

  return (
    <div className="sensor">
        <div className="div-id">
          <h1 className="h1-title">#ID Sensor</h1>
          {/* <span>Última atualização: {data.date} | às {data.time}min</span> */}
          <span>Última atualização: 12-12-20 | às 21:05min</span>
        </div>
        <div className="div-btn">
        <button id="btn" type="button" className="btn btn-primary-outline">ATUALIZAR SENSORES</button>
        </div>
    </div>
  );
}

export default UpdateSensor;
