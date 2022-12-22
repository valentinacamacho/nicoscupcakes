import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Categorias from '../Components/Categorias';
import '../StylesSheet/Styles.css'

function Home() {
    return (
      <div className="Home">
  
      <Header
      />
  
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
  