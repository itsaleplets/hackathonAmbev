import React, { useContext, useState } from 'react';
import beerContext from '../Context/beerContext';
import '../Css/App.css'

function UpdateSensor() {
  const { apiResult, fetch } = useContext(beerContext);
  const [date, setDate] = useState('');
  const handleClick = () => {
    fetch();
    const today = new Date();
    const time = `${today.getHours()} : ${today.getMinutes()}`;
    const date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    setDate(`${date} | às ${time}`)
  }
  
    

  return (
    <div className="sensor">
        <div className="div-id">
          <h1>#1 Sensor</h1>
          <span>Última atualização: {date}</span>
        </div>
        <div className="div-btn">
        <button onClick={ () => handleClick() } id="btn" type="button" className="btn btn-primary-outline">ATUALIZAR SENSORES</button>
        </div>
    </div>
  );
}

export default UpdateSensor;
