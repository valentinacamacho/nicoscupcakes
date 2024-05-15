import React, { useState } from "react";
import LogoCup from '../assets/Images/LogoCup.png';
import iconmenu from '../assets/Images/iconmenu.svg';
import carrito from '../assets/Images/carrito.svg';
import close from '../assets/Images/close.png'
import '../StylesSheet/Styles.css';
import { Link } from 'react-router-dom';

function Header({ allProducts }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="contenedor-principal-header">
      <div className="header">
        <div className="LogoCup">
          <Link to="/"><img src={LogoCup} alt='Nico´s Cupcakes' /></Link>
        </div>

        <nav className={menuOpen ? "Nav-menu-vertical-abierto" : "Nav-menu-vertical-cerrado"}>
          <ul className="Nav-menu-vertical">
          <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="/VistaSecun">¡quienes somos!</Link>
            </li>
            <li className="dropdown">
              <a href="#">productos</a>
              <ul className="Nav-menu-vertical dropdown-content">
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

 


        <div className="carrito-arriba-contador">
          <div className="circulo1">
            <div className="icon-carrito">
              <Link to="/ListProducts">
                <img src={carrito} alt='carrito' />
              </Link>
            </div>
            <div className="circulo2-contador">
              <span>{allProducts.length}</span>
            </div>
          </div>
        </div>

        {/* Icono de menú hamburguesa */}
        <div className="icon-menu icon-hamburguesa" onClick={toggleMenu}>
          <img src={iconmenu} alt="Menú"/>
        </div>

        {/* Menú desplegable */}
        {menuOpen && (
          <div className="cerrar-menu icon-cerrar" onClick={toggleMenu}>
             <img src={close} alt="close"/>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
