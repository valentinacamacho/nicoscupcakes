import React from "react";
import { Cupcake } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";
import Carrusel from "../Components/Carrusel";
import carrusel1 from "../assets/Images/ProductsCupcakes/carrusel1.png";

export const Cupcakes = ({ allProducts, setAllProducts,setTotal,total }) => {
  const onAddProduct = (item) => {
    setAllProducts([...allProducts, item]);
    setTotal(total + item.price * item.quantity)
  };



  /*let productsincart=[];
  const onAddProduct=(item) =>{
    productsincart=[...productsincart, item];
      setAllProducts productsincart ;  
        console.log('add', allProducts );
  }*/

  return (
    <div className="Cupcakes">
      <div className="carrusel-cop">
        <Carrusel
        image={carrusel1}
        titulo='6 cupcakes'
        precio='$ 28.000'
        />
      </div>

      <div className="tarjetas-cupcakes">
        {Cupcake.map((product) => (
          <div className="item" key={product.id}>
            <div className="card-products">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="products-cup">
                      <img src={product.urlImage} alt={product.nameProduct} />
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <h3>{product.nameProduct}</h3>
                    <p>${product.price}</p>
                    <div className="carrito-mas">
                      <img
                        onClick={() => onAddProduct(product)}
                        src={Carritop}
                        alt="Carrito"
                      />
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
