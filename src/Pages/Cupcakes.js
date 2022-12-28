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
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <div className="products-cup">
                          <img
                            src={product.urlImage}
                            alt={product.nameProduct} 
                          />
                        </div>
                      </div>
                        <div className="flip-card-back">
                          <h3>{product.nameProduct}</h3> 
                          <p>${product.price}</p> 
                          <button >Añadir al carrito</button>
                        </div>
                    </div>
                  </div>
                </div>
         
        ))}

          <Footer
            texto1='Derechos reservados-Nico´s Cupcakes'
            texto2='2022'
          />
      </div>
    );
};

