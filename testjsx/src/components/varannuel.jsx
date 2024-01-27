import React from 'react'
import ApexCharts from 'react-apexcharts'
import { useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

function Varannuel() {
    const navigate = useNavigate()
    const state = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, 

        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                events: {
                    xAxisLabelClick: function(event, chartContext, config) {
                      navigate("/month/"+(config.labelIndex+1))
                    }
                  }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    };

  return (
    <>
    <div>
        <ApexCharts options={state.options} series={state.series} type="bar" height={350} width={400} />
    </div>
    </>
  )
}

export default Varannuel;