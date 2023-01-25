import React from "react";
import minicup from "../assets/Images/minicup.png";
import "../StylesSheet/Styles.css";

function Items({ titulo, texto1}) {
  return (
    <div className="items-contenedor">
      <div className="items">
        <div className="circulo-items">
          <img src={minicup} alt="Minicup" />
        </div>
        <div className="color-titulo">
          <h4>{titulo}</h4>
        </div>
      </div>

      <div className="parrafo-items">
        <p>{texto1}</p>
      </div>
    </div>
  );
}

export default Items;
