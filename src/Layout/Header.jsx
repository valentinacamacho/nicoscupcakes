import React from "react";
import LogoCup from '../assets/Images/LogoCup.png'
import iconmenu from '../assets/Images/iconmenu.svg'
import carrito from '../assets/Images/carrito.svg'
import '../StylesSheet/Styles.css'

function Header(){
  return(

    <header className="contenedor-principal-header">
    <div className="header">

      <div className="LogoCup">
        <img
        src={LogoCup}
        alt='Nico´s Cupcakes'/>
      </div>


    <nav>
      <ul className="Nav-menu-horizontal">
        <li>
          <a href="#">inicio</a>
        </li>
        <li>
          <a href="#">¡quienes somos!</a>
        </li>
        <li>
          <a href="#">productos</a>

          
          <ul className="Nav-menu-vertical">
            <li><a href="#">cupcakes</a></li>
            <li><a href="#">mini tortas</a></li>
            <li><a href="#">paleta de pastel</a></li>
          </ul>
        </li>

        <li>
          <a href="#">contactanos</a>
        </li>
      </ul>
    </nav>

    {/* <div className="Icono-menu">
    <img 
    src={iconmenu}
    alt='Icono'/>   
   </div> */}

<div className="carrito-arriba-contador">
      <div className="circulo1">

        <div className="icon-carrito">
          <img
          src={carrito}
          alt='carrito'
          />
        </div>
        
        <div className="circulo2-contador"> 
        <span>0</span>
        </div>
      </div>
    </div> 
    </div>    
    </header>
  );
}

export default Header;