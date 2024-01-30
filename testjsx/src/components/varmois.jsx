import React from 'react'
import {Bar} from "react-chartjs-2";
import Datagraph1 from '../../datagraph1.json'

function Varmois() {
    return (
        <div className='datagraph1'>

                <Bar
                data={{
                    labels: Datagraph1.map((data)=>data.Jour),
                    datasets: [
                        {
                            label:"Passager",
                            data: Datagraph1.map((data)=>data.Passager),
                             backgroundColor: "#003652"
                        }
                    ]
                }}
                />

        </div>
    )
            }

export default Varmois;