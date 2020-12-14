import React, { useState } from 'react';
import propTypes from 'prop-types';
import beerContext from './beerContext';
import getAPI from '../Services/API';

function BeerProvider({ children }) {
  const [data, setData] = useState([]);
  const [splashScreen, setsplashScreen] = useState(true);
  const [apiResult, setApiResult] = useState('');
  const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  const yAxisData = [1, 2, 1, 2.5, 1, 2]
  
  const fetch = async () => {
    const getFetch = await getAPI();
    setApiResult(getFetch);
  };

  const showSplashScreen = () => {
    setsplashScreen(false);
  }

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
    fetch,
    showSplashScreen,
    apiResult
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
