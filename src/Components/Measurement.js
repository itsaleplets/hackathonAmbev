import React, { useContext } from 'react';
import '../Css/App.css'
import Chart from './Chart';
import beerContext from '../Context/beerContext';

function Measurement() {
  // const { data } = useContext(beerContext);

  const alcohol = 'Teor Alcoólico';
  const O2 = 'Gás Carbônico';
  const CO2 = 'Oxigênio';

  const dataMock = [
    {
      title: 'Teor Alcoólico',
      percent: 4.9,
    },
    {
      title: 'Oxigênio',
      percent: 9,
    },
    {
      title: 'Gás Carbônico',
      percent: 5.8,
    },
  ]

  const getStatus = (percent, title) => {
    if(title === alcohol && percent > 4.9 && percent <= 5.4 || title === O2 && percent > 4.5 && percent <= 5 || title === CO2 && percent > 10 && percent <= 12) {
      return ['#FECA5B', 'Alerta', 'Valor acima do ideal'];
    } else if(title === alcohol && percent >= 5.5 || title === O2 && percent > 5 || title === CO2 && percent > 12) {
      return ['#ED4A71', 'Crítico', 'Valor acima do ideal'];
    }
    return ['#19CC97', 'Estável', 'Valor dentro do permitido'];
  }

  const getDetails = (type) => {
    switch(type) {
      case 'Teor Alcoólico':
        return ['/Alcool.svg', '4.9%'];
      case 'Oxigênio':
        return ['/CO2.svg', '10ppm'];
      case 'Gás Carbônico':
        return ['/O2.svg', '4.5%'];
      default:
        return '';
    }
  }

  return (
    <div>
      {dataMock.map((element) => {
        const { title, percent } = element;
        const status = getStatus(percent, title);
        const details = getDetails(title);
        return (
          <div key={ title } className="measurement-card">
            <div className="info-div">
              <img className="icon" alt={ title } src={ details[0] }/>
              <h3>{ title }</h3>
              <span>Valor ideal {details[1]}</span>
              <div className="rating" style={ { backgroundColor: status[0]} }>
                <h1>{ percent } %</h1>
                <h4>{ status[1] }</h4>
                <span>{status[2]}</span>
              </div>
            </div>
            <Chart title={title} measure={percent} />
          </div>
        )
      })}
      <div className="measurement-card" style={ {opacity: '30%'} }>
        <div className="info-div">
          <img className="icon" alt="co2 icon" src='/IBU.svg'/>
          <h3>Amargor</h3>
          <span>Valor ideal 15</span>
          <div className="rating" style={ {backgroundColor:'white', color: '#13245A'} } >
            <h2>Sensor Inativo</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Measurement;
