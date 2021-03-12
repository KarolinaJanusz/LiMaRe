import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import Dropdown from './Dropdown'

function Nav(){
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if(window.innerWidth < 1042){
      setDropdown(false)
    }
    else{
      setDropdown(true)
    }
  }

  const onMouseLeave = () =>{
    if(window.innerWidth < 1042){
      setDropdown(false)
    }
    else{
      setDropdown(false)
    }
  }



  
    return(
      <nav className = 'mainNav'>
      <Link to ='/'> 
    <img src={logo} className = "menu-img"/>
    </Link> 

    <div className = "menu-icon" onClick = {handleClick}>
      <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    

    <ul className = {click ? 'nav-menu-active' : 'nav-menu'}>
 
        
      <li className = "nav-item"
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
      onClick= {closeMobileMenu}>
      
        <Link to='./oferta'>
        Oferta 
        </Link>
        <i className = "fas fa-caret-down" />

      {dropdown && <Dropdown />}
      
      </li>
      
     
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to='./zdrowie'>
      Zdrowie
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './blog'>
      Blog
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './galeria'>
      Galeria
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './cennik'>
      Cennik
      </Link>
      </li>
      
      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './sklep'>
      Sklep
      </Link>
      </li>

      <li className = "nav-item"
      onClick= {closeMobileMenu}>
      <Link to = './kontakt'>
     Kontakt
      </Link>
      </li>
      
      

    </ul>
    
  
    </nav>
  )
  }
// }

  export default Nav;