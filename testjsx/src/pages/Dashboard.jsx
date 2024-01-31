import React from 'react';
import "./Dashboard.css"

import Varannuel from '../components/varannuel';
import Varmois from '../components/varmois';
import Cartemois from  "../components/cartemois.png";
import Carteannuel from  "../components/carteannuel.png";
import Donutmois from '../components/donutmois.jsx'
import Donutannuel from '../components/donutannuel.jsx';


function Dashboard () {
  return (
    <>
    <div className="Content">
      
      <div className="partie-grise">
        <button className="export-buttonLeft">Export</button>
        <p className='mois'>Octobre 2023</p>
        <div className="container">
         <Varmois/> 
        </div> 
        <div className='Top'>
        <p>Top OD impactées par Intempéries (Tous)</p>
        </div>
        <div className="rectangles1">
          <div className="rectangle" id="rectangle1">
          </div>
          <div className="rectangle" id="rectangle2"></div>
          <div className="rectangle" id="rectangle3"></div>  
         </div>

         <div className="donutmois">
          <img src= {Cartemois} alt="" className="cartemois"/>
          <Donutmois/>       
            
        </div>
         
      </div>


      <div className="partie-bleue">
        <button className="export-buttonRight">Export</button>
        <p className='annuel'>Annuel 2023</p>
        <div className="containerr">
          <Varannuel/>
        </div>
        <div className='Top'>
        <p>Top OD impactées par Intempéries (Tous)</p>
        </div>
        <div className="rectangles2">
          <div className="rectangleb" id="rectangleb1"></div>
          <div className="rectangleb" id="rectangleb2"></div>
          <div className="rectangleb" id="rectangleb3"></div>  
         </div>
         <img src= {Carteannuel} alt="" className="carteannuel"/>
        <div className="donutannuel">
          <Donutannuel/>
        </div>
        
      </div>

    </div>
    </>
  )
};

/*
const Dashboard = () => {
  import cartemois from "./assets/images/CARTEDEFRANCE_M.png"
    return (
        <>
      </><div className="partie-grise">
          <div id="export">
            <button className="export-button">Export</button>
          </div>
            <h2 className='mois'>Octobre 2023</h2>
          <div className="App">
            <div className="container">
              <div className="card">
                <Varmois/>
            </div>
          </div>
        
        <img src={cartemois} alt="" className="cartemois"/>    
        

          <div className="partie-bleue">
          <div id="export1">
            <button class="export1-button">Export</button>
            </div>

            <div className="container">
              <div className="a">
                <Varannuel/>
            </div>
          </div>
        </div>

              

          </>
    );
};*/

export default Dashboard; 


