import React from "react";
import '../StylesSheet/Styles.css'

function Categorias(props){
    return(
        <div className="Conteedor-principal-Categorias">
          <div className="Categorias">

            <div className="circulo-categoria">
            <img
            src={require(`../Images/categoria-${props.icono}.jpg`)}
            alt='icon'
            />
            </div>

            <div className="texto-categoria">
              <p>{props.texto}</p>
            </div>

          </div>
        </div>
    );
}

export default Categorias;