import React from "react";

function Header(){
  return(

    <header className="contenedor-principal-header">
    <div className="header">

    <img className="LogoCup"
    src={LogoCup}
    alt='Nico´s Cupcakes'/>

    <div className="carrito-arriba">
      <div className="circulo1">
        <div className="circulo2-contador">  
        </div>
      </div>
    </div>

    <img className="Icono-menu"
    src={iconmenu}
    alt='Icono'/>   
    </div>    
    </header>
  );
}

export default Header;