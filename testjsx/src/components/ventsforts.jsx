import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts'; 
import Datagraph2 from '../../datagraph2.json'

const Ventsforts = () => {
  
  const [chartOptions, setChartOptions] = useState({
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  });

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={250} />
    </div>
  );
};

export default Ventsforts;
