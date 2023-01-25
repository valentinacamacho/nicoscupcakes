import React from "react";
import { SiTiktok } from "react-icons/si";
import minicupcake from '../assets/Images/minicupcake.png'
import '../StylesSheet/Styles.css'
import  Instagram from '../assets/Images/Instagram.png'
import  Facebook from '../assets/Images/Facebook.png'
import  Tiktok from '../assets/Images/Tiktok.png'

function Footer({texto1,texto2}) {
    return(
     
      <footer>
        <div className="footer">
          <div className=" Redes-sociales">
            <img 
            src={Instagram}
            alt='Instagram' />

            <img 
            src={Facebook}
            alt='Facebook'/>

            <img 
            src={Tiktok}
            alt='TikTok'/>          
          </div>

          <div className="linea-morada"></div>

          <div className='icono-cupcake-footer'>
          <p>{texto1}</p>
            <img  
              src={minicupcake}
              alt='cupcake' />
               <p>{texto2}</p>
          </div>        
        </div>
      
      </footer>
      
    );
}

export default Footer;
