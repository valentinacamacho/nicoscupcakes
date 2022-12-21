import React from "react";

function Categorias(icon,texto){
    return(
        <div className="Conteedor-principal-Categorias">
          <div className="Categorias">
            <img
            src={icon}
            alt='Cupcake'
            />

            <div className="texto-categoria">
              <p>{texto}</p>
            </div>

          </div>
        </div>
    );
}

export default Categorias;