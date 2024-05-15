import React from "react";
import { SiTiktok } from "react-icons/si";
import minicupcake from '../assets/Images/minicupcake.png'
import '../StylesSheet/Styles.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";

function Footer({ texto1, texto2 }) {
  return (

    <footer>
      <div className="footer">
        <div className=" Redes-sociales">

          <a href="https://www.instagram.com/nikos_cupcakes_/" target="_blank">
            <FaSquareInstagram />
          </a>
          <a href="https://www.facebook.com/nikoscupcakes?locale=es_LA" target="_blank">
            <FaFacebookSquare />
          </a>
          <a href="https://www.tiktok.com/@nikos_cupcakes_" target="_blank">
            <RiTiktokFill />
          </a>
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
