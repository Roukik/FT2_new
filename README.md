# FT2_new

//*/import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import Datagraph2 from '../../datagraph2.json';

const Ventsforts = () => {
  
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      height: 250,
    },
    xaxis: {
      categories: Datagraph2.map((data) => data.Mois),
    },
    series: [
      {
        name: 'Passager',
        data: Datagraph2.map((data) => data.Passagers),
      },
    ],
  });

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={250} />
    </div>
  );
};

export default Ventsforts;
