import React from "react";
import { Pastel } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";

export const Pastels = () => {
  return (
    <div className="Cupcakes">

      <div className="tarjetas-cupcakes">
        {Pastel.map((product) => (
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
    </div>
  );
};
