import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo2 from './images/logo2.png'

function Footer(){
    return(


        <footer className= "Footer">

          <Link to ='/'> 
          <img src = {logo2} className= "logo-footer"/>
        </Link>

            

    <div className= "menu-footer">
      <ul className = "menu-footer-list">
        <Link to = '/oferta'>  <li> <i className="fas fa-chevron-right"></i>OFERTA</li>   </Link> 
        <Link to = '/zdrowie'> <li> <i className="fas fa-chevron-right"></i>ZDROWIE</li>  </Link> 
        <Link to ='/blog'>     <li> <i className="fas fa-chevron-right"></i>BLOG</li>      </Link> 
        <Link to ='/cennik'>    <li> <i className="fas fa-chevron-right"></i>CENNIK</li>   </Link>
      </ul>
    </div>

        

        
     
       
        <div className= "contact-footer">
        
          <ul className = "contact-footer-list">
          <Link to = '/kontakt'>  <li><i className="fas fa-phone"></i> +48 793 017 988</li> </Link>
          <Link to = '/kontakt'>   <li><i className="far fa-envelope"></i> kontakt@limare.pl</li> </Link>
          <Link to = '/kontakt'>   <li><i className="fab fa-facebook-f"></i> https://www.facebook.com/LiMaReKobido</li> </Link>
          </ul>
        </div>

      

      </footer>
    )
  }

  export default Footer;