import React,{useState} from "react";
import { Cupcake } from "../Data/Products";
import Carritop from "../assets/Images/carritop.png";

export const Cupcakes = ({ allProducts, setAllProducts, setTotal, total }) => {
  const [selectedCupcakes, setSelectedCupcakes] = useState([]);

  const onAddProduct = (item) => {
    const productExist = selectedCupcakes.some((product) => product.id === item.id);
    if (!productExist) {
      const newSelectedCupcakes = [...selectedCupcakes, item];
      setSelectedCupcakes(newSelectedCupcakes);
      setAllProducts([...allProducts, item]);
      setTotal(total + item.price * item.quantity);
    }
  };

/*let productsincart=[];
const onAddProduct=(item) =>{
  productsincart=[...productsincart, item];
    setAllProducts productsincart ;  
      console.log('add', allProducts );
}*/

return (
  <div className="Cupcakes">
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
