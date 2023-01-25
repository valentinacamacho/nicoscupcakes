import React from "react";
import LogoCup from '../assets/Images/LogoCup.png'
import iconmenu from '../assets/Images/iconmenu.svg'
import carrito from '../assets/Images/carrito.svg'
import '../StylesSheet/Styles.css'
import { Link } from 'react-router-dom';

function Header({ allProducts}){
  
  return(

    <header className="contenedor-principal-header">
    <div className="header">

      <div className="LogoCup">
      <Link to="/"><img src={LogoCup} alt='Nico´s Cupcakes'/></Link>
      </div>


    <nav>
      <ul className="Nav-menu-horizontal">
        <li>
          <Link to="/">inicio</Link>
        </li>
        <li>
          <Link to="/VistaSecun">¡quienes somos!</Link>
        </li>
        <li>
          <a href="#">productos</a>

          
          <ul className="Nav-menu-vertical">
            <li><Link to="/Cupcakes">cupcakes</Link></li>
            <li><Link to="/Pastels">mini tortas</Link></li>
            <li><Link to="/Paletas">paleta de pastel</Link></li>
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
        <Link to="/ListProducts"> <img
          src={carrito}
          alt='carrito'
          /> </Link>
        </div>
        
        <div className="circulo2-contador"> 
        <span>{allProducts.length}</span>
        </div>
       
      </div>
      
    </div> 
    </div>    
    </header>
  );
}

export default Header;