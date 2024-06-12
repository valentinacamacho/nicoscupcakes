import React, { useState } from "react";
import { Cupcake } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";
import Carrusel from "../Components/Carrusel";
import pro1 from "../assets/Images/Carrusel/MiniCups12Norma.png";
import pro2 from "../assets/Images/Carrusel/MiniCups6.png";
import pro3 from "../assets/Images/Carrusel/MiniCups12.png";

export const Cupcakes = ({ allProducts, setAllProducts, setTotal, total }) => {
  const [selectedCupcakes, setSelectedCupcakes] = useState([]);

  const onAddProduct = (item) => {
    const productExist = selectedCupcakes.some(
      (product) => product.id === item.id
    );
    if (!productExist) {
      const newSelectedCupcakes = [...selectedCupcakes, item];
      setSelectedCupcakes(newSelectedCupcakes);
      setAllProducts([...allProducts, item]);
      setTotal(total + item.price * item.quantity);
    }
  };

  const items = [
    {
      image: pro1,
      titulo: "Cupcakes Sencillos.",
      precio: "$26.000 COP",
      cantidad: "12 Cupcakes",
    },
    {
      image: pro2,
      titulo: "Miní cupcakes con decoración especial.",
      precio: "$35.000 COP",
      cantidad: "6 Cupcakes",
    },
    {
      image: pro3,
      titulo: "Miní cupcakes con decoración especial.",
      precio: "$70.000 COP",
      cantidad: "12 Cupcakes",
    },
  ];

  /*let productsincart=[];
  const onAddProduct=(item) =>{
    productsincart=[...productsincart, item];
      setAllProducts productsincart ;  
        console.log('add', allProducts );
  }*/

  return (
    <div className="Cupcakes">
      <div className="carrusel-pro">
        <Carrusel
          items={items}
          Titulocarru="Nuestros Cupcakes."
          Descarru="Ofrecemos deliciosos Cupcakes personalizados. Visualiza nuestro catálogo para descubrir una variedad de sabores. ¡Elige el tuyo y contáctanos para ordenar!"
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
                    <p>${product.price.toLocaleString()}</p>
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
