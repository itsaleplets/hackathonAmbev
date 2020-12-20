import React, { useContext, useState } from 'react';
import '../Css/App.css'
import Chart from './Chart';
import { dataMock } from '../Services/Helper';
import beerContext from '../Context/beerContext';
import alcool from '../images/Alcool.svg'

function Measurement() {
  const [values, setValues] = useState(5);
  const { apiResult } = useContext(beerContext);
  const alcohol = 'Teor Alcoólico';

  const getStatus = (title) => {
    if(title === alcohol && apiResult < 5 && apiResult >= 4) {
      return ['#FECA5B', 'Alerta', 'Valor abaixo do ideal', '100%', '#FFFFFF'];
    } else if(title === alcohol && apiResult < 4) {
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
        return ['/IBU.svg', '15'];
      default:
        return '';
    }
  }

  //Código para ser usado com implementação de banco de dados
  // const updateValue = () => {
  //   if(apiResult) {
  //     return apiResult.percent;
  //   }
  // }
  // setTimeout(() => {
  //   const result = updateValue ();
  //   if(!result) {
  //     setValues(5);
  //   } else {
  //     setValues(result);
  //   }
  // }, 4000);

  return (
    <div>
      {console.log(apiResult)}
      {dataMock.map((element) => {
        const { title } = element;
        const status = getStatus(title);
        const details = getDetails(title);
        return (
          <div key={ title } className="measurement-card" style={ {opacity: status[3]} }>
            <div className="info-div">
              <img className="icon" alt={ title } src={alcool}/>
              <h3>{ title }</h3>
              <span>Valor ideal {details[1]}</span>
              <div className="rating" style={ { backgroundColor: status[0], color: status[4]} }>
                { title === alcohol ? <h1>{apiResult}%</h1>  : ''}
                <h4>{ status[1] }</h4>
                <span className="percent">{status[2]}</span>
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
