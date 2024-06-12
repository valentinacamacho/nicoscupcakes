import React, { useState } from "react";
import { Paleta } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";
import Carrusel from "../Components/Carrusel";
import pro1 from "../assets/Images/Carrusel/Paleta6.png";
import pro2 from "../assets/Images/Carrusel/Paletas10.png";

export const Paletas = ({ allProducts, setAllProducts, setTotal, total }) => {
  const [selectedPaletas, setSelectedPaletas] = useState([]);

  const onAddProduct = (item) => {
    const productExist = selectedPaletas.some(
      (product) => product.id === item.id
    );
    if (!productExist) {
      const newSelectedPaletas = [...selectedPaletas, item];
      setSelectedPaletas(newSelectedPaletas);
      setAllProducts([...allProducts, item]);
      setTotal(total + item.price * item.quantity);
    }
  };

  const items = [
    {
      image: pro1,
      titulo: "Miní tortas de 10CM personalizadas.",
      precio: "$51.000 COP",
      cantidad: "6 Palestas ",
    },
    {
      image: pro2,
      titulo: "Paletas de pastel personalizadas.",
      precio: "$85.000 COP",
      cantidad: "10 Paletas",
    },
  ];

  return (
    <div className="Cupcakes">
      <div className="carrusel-pro">
        <Carrusel
          items={items}
          Titulocarru="Nuestras Paletas de Pastel."
          Descarru="Ofrecemos deliciosos Paletas de pastel personalizados. Visualiza nuestro catálogo para descubrir una variedad de sabores. ¡Elige el tuyo y contáctanos para ordenar!"
        />
      </div>
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
