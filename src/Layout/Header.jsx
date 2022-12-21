import React from "react";
import LogoCup from '../assets/Images/LogoCup.png'
import iconmenu from '../assets/Images/iconmenu.svg'
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

    <div className="carrito-arriba-contador">
      <div className="circulo1">
        <div className="icon-carrito">
          <img
          src={carrito}
          alt='carrito'
          />
        </div>
        <div className="circulo2-contador">  
        </div>
      </div>
    </div> 

    {/* <div className="Icono-menu">
    <img 
    src={iconmenu}
    alt='Icono'/>   
   </div> */}

  
    </div>    
    </header>
  );
}

export default Header;