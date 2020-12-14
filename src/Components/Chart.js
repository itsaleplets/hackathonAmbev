import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import beerContext from '../Context/beerContext';

function Chart(props) {
  const { data, getData, fetch } = useContext(beerContext);
  useEffect(() => {
    getData();
    fetch();
  }, []);
  
  return (
    <div className="chart">
      <Line
          data = { data.chartData }
          options = {{
            title: {
              display: true,
              text: `Histórico do ${props.title} | por hora`,
              fontSize: 12,
              fontColor: '#305AE0',
            },
            legend: {
              display: false,
            },
            scales: {
              yAxes: [{
                display: true,
                position: 'right',
                fontSize: 1,
                ticks: {
                  beginAtZero: true,
                  fontSize: 4
                }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 8
                }
              }]
            }
          }}
        />
    </div>
  );
}

export default Chart;
