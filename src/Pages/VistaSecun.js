import "../StylesSheet/Styles.css";
import avatar from "../assets/Images/avatar.png";
import Items from "../Components/Items";
import { Link } from "react-router-dom";

function VistaSecun() {
  return (
    <div className="vistasecun">
      <div className="Recuadro-Vistasecun">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="boton-vistasecun">
            <Link to="/Cupcakes">
              <button>Conoce Nuestros Productos</button>
            </Link>
          </div>
        </div>

        <div className="texto1-secun">
          <h1 className="titulo-secun">¡Quienes somos!</h1>
          <p>
            En Nico’s Cupcakes creamos deliciosos dulces y mini reposteria, con
            exquisitas recetas y sabores originales; hechos con ingredientes de
            alta calidad.
          </p>
          <p>Ofrecemos deliciosos Cupcakes, Mini tortas y paletas de pastel</p>
          <p>
            Somos un emprendimiento artesanal donde dedicamos el tiempo
            necesario a las necesidades del cliente
          </p>
        </div>
      </div>

      <div className="items-vistase">
        <Items
          titulo="Objetivo Principal"
          texto1="Llevar a cada cliente un servicio personalizado y acorde a las características de cada evento y necesidad."
        />

        <Items
          titulo="Misión"
          texto1="Utilizar mejores ingredientes y buenas técnicas para innovar nuevos sabores y recetas, entregando una experiencia inolvidable."
        />

        <Items
          titulo="Visión"
          texto1="Ser reconocido como Nico's Cupcakes, queremos ser  la primera opción en cupcakes deliciosos, creativos y de alta calidad."
        />
      </div>
    </div>
  );
}

export default VistaSecun;
