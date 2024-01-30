import React, { useEffect, useState } from 'react';



const Donutmois = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [44, 55, 13, 33],
    chart: {
      width: 380,
      type: 'donut',
    },

  });

  const appendData = () => {
    const newSeries = chartOptions.series.slice();
    newSeries.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setChartOptions({ ...chartOptions, series: newSeries });
  };

  const removeData = () => {
    const newSeries = chartOptions.series.slice();
    newSeries.pop();
    setChartOptions({ ...chartOptions, series: newSeries });
  };

  const randomize = () => {
    const newSeries = chartOptions.series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setChartOptions({ ...chartOptions, series: newSeries });
  };

  const reset = () => {
    setChartOptions({ ...chartOptions, series: [44, 55, 13, 33] });
  };

  useEffect(() => {

    const chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [chartOptions]); 

  return (
    <div>
      <div id="chart"></div>
      <button onClick={randomize}>Randomize</button>
      <button onClick={appendData}>Add</button>
      <button onClick={removeData}>Remove</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Donutmois;



