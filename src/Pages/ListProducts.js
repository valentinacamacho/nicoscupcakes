import React from "react";
import "../StylesSheet/Styles.css";

function ListProducts({ allProducts, setAllProducts }) {
  return (
    <div className="ListProduct">
      {allProducts.map((product) => (
        <div className="item" key={product.id}>
          <div className="lista-carrito">
            <div className="imagen-list">
              <img src={product.urlImage} alt={product.nameProduct} />

              <div className="informacion-list">
                <h3>{product.nameProduct}</h3>
                <p>${product.price}</p>
                <h3>{product.sabor}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="button-compra">
        <button>
          <p>Continuar con la compra</p>
          <p>precio</p>
        </button>
      </div>
    </div>
  );
}

export default ListProducts;
