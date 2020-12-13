import React, { useState } from 'react';
import propTypes from 'prop-types';
import beerContext from './beerContext';
// import getAPI from '../Services/API';

function BeerProvider({ children }) {
  const [data, setData] = useState([]);
  const [splashScreen, setsplashScreen] = useState(true);
  
  // const fetch = async () => {
  //   const getFetch = await getAPI();
  //   setData(getFetch);
  // };

  const showSplashScreen = () => {
    setsplashScreen(false);
  }
  const xAxisData = [1, 3, 6, 12, 15, 18, 21, 24]
  const yAxisData = [1, 2, 1, 2.5, 1, 2]
  const dataMock = [
    {
      title: 'Teor Alcoólico',
      percent: 5.5,
    },
    {
      title: 'Oxigênio',
      percent: 11,
    },
    {
      title: 'Gás Carbônico',
      percent: 4.5,
    },
  ]

  const getData = () => {
    setData({
      chartData: {
        type: 'line',
        labels: xAxisData,
        datasets: [
          {
            label: 'Level',
            data: yAxisData,
            backgroundColor:'rgba(0, 0, 0, 0)',
            borderColor: ['#305AE0'],
            borderWidth: [1],
            borderJoinStyle: ['round']
          }
        ],
        
      }
    });
  };

  const contextValue = {
    data,
    getData,
    splashScreen,
    showSplashScreen,
  };

  return (
    <beerContext.Provider value={ contextValue }>
      { children }
    </beerContext.Provider>
  );
}

BeerProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default BeerProvider;
