import React from "react";
import { Cupcake } from "../Data/Products";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export const Cupcakes = () =>{
    return(
  
            <div className="Cupcakes">
           <Header/>              
              {
              Cupcake.map(product => (
              <div className="item" key={product.id}>
                <figure className="products-cup">
                  <img
                    src={product.urlImage}
                    alt={product.nameProduct}
                    />
                </figure>
              <div className="info-product">
                <h2>{product.nameProduct}</h2>
                <p>${product.price}</p>
              </div>
          </div>
         
        ))}

          < Footer
            texto1='Derechos reservados-Nico´s Cupcakes'
            texto2='2022'
          />
      </div>
    );
};

