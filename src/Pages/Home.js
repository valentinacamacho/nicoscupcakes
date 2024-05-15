import Categorias from "../Components/Categorias";
import "../StylesSheet/Styles.css";
import ReactPlayer from "react-player";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="Home">
      <div className="video-Nicos">
        <ReactPlayer
          url="https://youtu.be/kIXXH_lwEy4"
          controls
          playing
          muted
          onEnded={() => alert("Se Termino el Video de Nicos Cupcakes.")}
        />
      </div>

      <div className="categorias-texto2">
        <p>Nuestros Productos</p>
      </div>

      <div className="categorias-categorias">
        <Link className="texto-categoria" to="/Cupcakes">
          <Categorias icono={require('../assets/Images/categoria-cup.png')} texto="Cupcakes" />
        </Link>

        <Link className="texto-categoria" to="/Pastels">
          <Categorias icono={require('../assets/Images/categoria-past.png')} texto="Mini Tortas" />
        </Link>

        <Link className="texto-categoria" to="/Paletas">
          <Categorias icono={require('../assets/Images/categoria-paleta.png')} texto="Paletas de pastel" />
        </Link>
      </div>

      <div className="categorias-texto2">
        <p>Haz tú cotización</p>
      </div>

      <div className="textos">
        <div className="categorias-texto3">
          <p>
            Todos nuestros productos son elaborados bajo pedido. Por tanto,
            deben ser solicitados mínimo 3 días de anticipación y deben de elegir o escribirme a mis redes sociales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
