import React from "react";
import '../StylesSheet/Styles.css';

function Carrusel({image,titulo,precio}){
    return(
      <div className="Carrusel">
        <div class="cont-princ-slider">
          <div class="slier-prin">
            <div class="nico_cupcakes">
              <div className="carrusel-nicos">
              <img 
                src={image}
                alt='NicosCupacakes'/>
              </div>¨
              <div className="carrusel-datos">
                <h3 className="titulo-carrusel">{titulo}</h3>
                <h3 className="precio-carrusel">{precio}</h3>
              </div> 
            </div>
            

          </div>
        </div>
      </div>
    );
}

export default Carrusel;