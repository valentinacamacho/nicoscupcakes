import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Categorias from '../Components/Categorias';
import '../StylesSheet/Styles.css'
import ReactPlayer from 'react-player';
import React from 'react';
import video from '../assets/Video/Nicoscupcakees.mp4'

function Home() {
    return (
      <div className="Home">
  
      <Header
      />

      <div className='video-Nicos'>
        <ReactPlayer
        url={video}
        controls
        loop
        playing
        width='50%'
        height='50%'/>
      </div>
  
    <div className='categorias-texto2'>
        <p>Nuestros Productos</p>
    </div>
  
    <div className='categorias-categorias'>
      
      <Categorias
          icono='cup'
          texto='Cupcakes'
      />
  
      <Categorias
          icono='past'
          texto='Mini Tortas'
      />
  
      <Categorias
          icono='paleta'
          texto='Paletas de pastel'
      />
    </div>
  
      <div className='categorias-texto2'>
        <p>Haz tu cotizacion</p>
      </div>
  
    <div className='textos'>
      <div className='categorias-texto3'>
        <p>Todos nuestros productos son elaborados  bajo pedido. Por tanto, deben ser solicitados mínimo 3 dias de anticipación.</p>
      </div>
    </div>
  
      < Footer
        texto1='Derechos reservados-Nico´s Cupcakes'
        texto2='2022'
      />
      </div>
    );
  }
  
  export default Home;
  