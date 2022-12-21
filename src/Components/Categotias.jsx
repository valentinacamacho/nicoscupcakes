import React from "react";

function Categorias(icon,texto){
    return(
        <div className="Conteedor-principal-Categorias">
          <div className="Categorias">
            
            <div className="circulo-categoria">
            <img
            src={icon}
            alt='Cupcake'
            />
            </div>

            <div className="texto-categoria">
              <p>{texto}</p>
            </div>

          </div>
        </div>
    );
}

export default Categorias;