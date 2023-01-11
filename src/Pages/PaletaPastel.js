import React from "react";
import { Paleta } from "../Data/Products";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Carritop from "../assets/Images/carritop.png";

export const Paletas = () => {
  return (
    <div className="Cupcakes">
      <Header />
      <div className="tarjetas-cupcakes">
        {Paleta.map((product) => (
          <div className="item" key={product.id}>
            <div className="card-products">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="products-pas">
                      <img src={product.urlImage} alt={product.nameProduct} />
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <h3>{product.nameProduct}</h3>
                    <p>${product.price}</p>
                    <div className="carrito-mas">
                      <img src={Carritop} alt="Carrito" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer texto1="Derechos reservados-Nico´s Cupcakes" texto2="2022" />
    </div>
  );
};
