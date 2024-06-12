import React, { useState } from "react";
import { Pastel } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";
import Carrusel from "../Components/Carrusel";
import pro1 from "../assets/Images/Carrusel/Minitorta2.png";
import pro2 from "../assets/Images/Carrusel/Minitorta4.png";

export const Pastels = ({ allProducts, setAllProducts, setTotal, total }) => {
  const [selectedPastel, setSelectedPastel] = useState([]);

  const onAddProduct = (item) => {
    const ProductExist = selectedPastel.some(
      (product) => product.id === item.id
    );
    if (!ProductExist) {
      const newSelectedPastel = [...selectedPastel, item];
      setSelectedPastel(newSelectedPastel);
      setAllProducts([...allProducts, item]);
      setTotal(total + item.price * item.quantity);
    }
  };

  const items = [
    {
      image: pro1,
      titulo: "Miní tortas de 10CM personalizadas.",
      precio: "$25.000 COP",
      cantidad: "2 Miní Tortas",
    },
    {
      image: pro2,
      titulo: "Miní tortas de 10CM personalizadas.",
      precio: "$50.000 COP",
      cantidad: "4 Miní Tortas",
    },
  ];
  return (
    <div className="Cupcakes">
      <div className="carrusel-pro">
        <Carrusel
          items={items}
          Titulocarru="Miní Tortas de 10CM"
          Descarru="Ofrecemos deliciosas Miní Tortas personalizados. Visualiza nuestro catálogo para descubrir una variedad de sabores. ¡Elige el tuyo y contáctanos para ordenar!"
        />
        </div>
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
