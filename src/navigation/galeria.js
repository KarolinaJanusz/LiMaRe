import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Galery(){
    return(

      <Link to = '/:singlearticle'>
      <div className= "Galery">
        <h1>Galery Page</h1>
      </div>
      </Link>
    )
  }

  export default Galery;