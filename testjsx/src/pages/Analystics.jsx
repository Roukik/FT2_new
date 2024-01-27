import React from 'react';
import "./Analystics.css"
import Bleu from  "../components/bleu.png";
import Ventsforts from  "../components/ventsforts";

const Analystics = () => {
    return (
        <>
    <p></p>
    <div className='vents'>
    <Ventsforts/>
    </div>
    <div className="containerv">
      <div className="rightBlock">
        {<img src= {Bleu} alt="" className='bleu'/>}
      </div>
    </div>

</>

    );
};

export default Analystics;