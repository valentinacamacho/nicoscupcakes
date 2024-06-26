import React, { useState, useEffect } from "react";
import ReactWhatsapp from "react-whatsapp";
import "../StylesSheet/Styles.css";
import { TfiTrash } from "react-icons/tfi";

function ListProducts({allProducts, setAllProducts, total, setTotal}) {
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const handleDeleteProduct = (productId, price) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    setAllProducts(updatedProducts);
    setTotal(prevTotal => prevTotal - price);
  };

  const productsMessage = products.map(product => {
    return `${product.nameProduct} - Sabor: ${product.sabor} | Precio: $${product.price.toLocaleString()}`;
  }).join("\n");

  return (
    <div className="ListProduct">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <div className="lista-carrito">
            <div className="imagen-list">
              <img src={product.urlImage} alt={product.nameProduct} />
              <TfiTrash onClick={() => handleDeleteProduct(product.id, product.price)} className="trashIcon"/>
              <div className="informacion-list">
                <h3>{product.nameProduct}</h3>
                <p>${product.price.toLocaleString()}</p>
                <h3>{product.sabor}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="button-compra">
        {total === 0 ? (
          <p className="mensaje-carrito-vacio">No hay nada en el carrito</p>
        ) : (
          <ReactWhatsapp
            number="+57-320-468-8410"
            message={`Un gusto que viste nuestros productos en la página de Nico's Cupcakes. Lo que seleccionaste fue:\n${productsMessage}
            \nPara un total de $${total.toLocaleString()}`}
          >
            <p>Continuar con la compra vía a WhatsApp</p>
            <p>${total.toLocaleString()}</p>
          </ReactWhatsapp>
        )}
      </div>
    </div>
  );
}

export default ListProducts;
