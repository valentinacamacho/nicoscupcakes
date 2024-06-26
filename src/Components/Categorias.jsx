import React from "react";
import '../StylesSheet/Styles.css'

function Categorias(props){
    return(
        <div className="Contenedor-principal-Categorias">
          <div className="Categorias">
            <div className="circulo-categoria">
              <img src={props.icono} alt={props.texto} /> 
            </div>
            <div className="texto-categoria">
              <p>{props.texto}</p>
            </div>
          </div>
        </div>
    );
}

export default Categorias;
