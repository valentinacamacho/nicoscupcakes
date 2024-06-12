// Carrusel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../StylesSheet/Styles.css';

const Carrusel = ({ items, Titulocarru,Descarru }) => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.titulo} />
            <div className="carousel-caption">
              <h2>{item.titulo}</h2>
              <p>Precio: {item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="carousel-description">
        <h1 className='tituloh1'>{Titulocarru}</h1>
        <p>{Descarru}</p>
      </div>
    </div>
  );
};

export default Carrusel;
