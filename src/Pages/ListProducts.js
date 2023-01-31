import React from "react";
import "../StylesSheet/Styles.css";
import ReactWhatsapp from "react-whatsapp";

function ListProducts({ allProducts, setAllProducts, total }) {
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

      {/* <div className="button-compra">
        <button>
          <p>Continuar con la compra via a Whatssap</p>
          <p>${total}</p>
        </button>
      </div> */}

      <div className="button-compra">
        <ReactWhatsapp
          number="+57-320-468-8410"
          message={`Un gusto que viste nuestros productos en la pagina de Nicos Cupcakes lo que seleccionate fue: 
          para un total de $ ${total}`}>
          <p>Continuar con la compra via a Whatssap</p>
          <p>${total}</p>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default ListProducts;
