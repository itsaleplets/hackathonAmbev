import React, { useContext, useState } from 'react';
import '../Css/App.css'
import Chart from './Chart';
import { dataMock } from '../Services/Helper';
import beerContext from '../Context/beerContext';

function Measurement() {
  const [values, setValues] = useState('');
  const { apiResult } = useContext(beerContext);
  const alcohol = 'Teor Alcoólico';

  const getStatus = (title) => {
    if(title === alcohol && values < 5 && values >= 4) {
      return ['#FECA5B', 'Alerta', 'Valor abaixo do ideal', '100%', '#FFFFFF'];
    } else if(title === alcohol && values < 4) {
      return ['#ED4A71', 'Crítico', 'Valor abaixo do ideal', '100%', '#FFFFFF'];
    } else if( title !== alcohol) {
      return ['#FFFFFF', ' Sensor Inativo', '', '30%', '#13245A'];
    }
    return ['#19CC97', 'Estável', 'Valor dentro do permitido', '100%', '#FFFFFF'];
  }

  const getDetails = (type) => {
    switch(type) {
      case 'Teor Alcoólico':
        return ['/Alcool.svg', '5%'];
      case 'Oxigênio':
        return ['/CO2.svg', '10ppm'];
      case 'Gás Carbônico':
        return ['/O2.svg', '4.5%'];
      case 'Amargor':
        return ['IBU.svg', '15'];
      default:
        return '';
    }
  }

  const updateValue = () => {
    if(apiResult) {
      return apiResult.percent;
    }
  }
  
  setTimeout( async () => {
    const result = await updateValue();
    if(!result) {
      setValues(5);
    } else {
      setValues(result);
    }
  }, 4000);

  return (
    <div>
      {dataMock.map((element) => {
        const { title } = element;
        const status = getStatus(title);
        const details = getDetails(title);
        return (
          <div key={ title } className="measurement-card" style={ {opacity: status[3]} }>
            <div className="info-div">
              <img className="icon" alt={ title } src={ details[0] }/>
              <h3>{ title }</h3>
              <span>Valor ideal {details[1]}</span>
              <div className="rating" style={ { backgroundColor: status[0], color: status[4]} }>
                { title === alcohol ? <h1>{values}%</h1>  : ''}
                <h4>{ status[1] }</h4>
                <h7>{status[2]}</h7>
              </div>
            </div>
            {title === alcohol ? <Chart title={title} measure={values} /> : ''}
          </div>
        );
      })}
    </div>
  );
}

export default Measurement;
