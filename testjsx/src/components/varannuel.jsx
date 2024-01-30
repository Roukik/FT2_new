import React from 'react'
import {Bar} from "react-chartjs-2";
import Datagraph2 from '../../datagraph2.json'

function Varannuel() {
    return (
        <div className='datagraph2'>

                <Bar
                data={{
                    labels: Datagraph2.map((data)=>data.Mois),
                    datasets: [
                        {
                            label:"Passager",
                            data: Datagraph2.map((data)=>data.Passagers),
                             backgroundColor: "#fff"
                        }
                    ]
                }}
                />

        </div>
    )
            }


export default Varannuel;