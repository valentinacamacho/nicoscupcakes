import './App.css';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Categorias from './Components/Categorias';
import './StylesSheet/Styles.css'



function App() {
  return (
    <div className="App">

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


    < Footer
      texto1='Derechos reservados-Nico´s Cupcakes'
      texto2='2022'
    />
    </div>
  );
}

export default App;
