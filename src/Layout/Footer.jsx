import React from "react";
import minicupcake from '../assets/Images/minicupcake.png'

function Footer({texto1,texto2}){
    return(
     
      <footer  className="contenedor-principal-footer" >
        <div className="footer">
        <p>{texto1}</p>
        <img 
        className='icono-cupcake-footer'
        src={minicupcake}
        alt='cupcake' />
        <p>{texto2}</p>
        </div>
      </footer>
      
    );
}

export default Footer;
