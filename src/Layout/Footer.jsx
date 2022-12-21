import React from "react";
import minicupcake from '../assets/Images/minicupcake.png'
import '../StylesSheet/Styles.css'

function Footer({texto1,texto2}) {
    return(
     
      <footer  className="contenedor-principal-footer" >
        <div className="footer">
        <p>{texto1}</p>

        <div className='icono-cupcake-footer'>
        <img  
        src={minicupcake}
        alt='cupcake' />
        </div>
        <p>{texto2}</p>
        </div>
      </footer>
      
    );
}

export default Footer;
