import React from 'react';
import Kinesiotaping from '../oferta/kinesiotaping';
import Cosmetics from '../oferta/kosmetyki-i-aromaterapia';
import Massage from '../oferta/masaz-twarzy-kobido';
import Lifting from '../oferta/terapeutyczny-lifling-twarzy-dre';

function Offer(){
    return(
      <div className= "Offer">
        <Lifting />
        <Massage />
        <Cosmetics />
        <Kinesiotaping />
      </div>
    )
  }

  export default Offer;