import Categorias from "../Components/Categorias";
import "../StylesSheet/Styles.css";
import ReactPlayer from "react-player";
import React from "react";
import { Link } from "react-router-dom";
/*import video from '../assets/video/nicoscupcakess.mp4'*/

function Home() {
  return (
    <div className="Home">
      <div className="video-Nicos" style={{ width: "100%", height: "100%" }}>
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
          <Categorias icono="cup" texto="Cupcakes" />
        </Link>

        <Link className="texto-categoria" to="/Pastels">
          <Categorias icono="past" texto="Mini Tortas" />
        </Link>

        <Link className="texto-categoria" to="/Paletas">
          <Categorias icono="paleta" texto="Paletas de pastel" />
        </Link>
      </div>

      <div className="categorias-texto2">
        <p>Haz tu cotizacion</p>
      </div>

      <div className="textos">
        <div className="categorias-texto3">
          <p>
            Todos nuestros productos son elaborados bajo pedido. Por tanto,
            deben ser solicitados mínimo 3 dias de anticipación.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
