import './App.css';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Categorias from './Components/Categotias';



function App() {
  return (
    <div className="App">

    <Header
    />

    <Categorias
    />

    < Footer
      texto1='Derechos reservados-Nico´s Cupcakes'
      texto2='2022'
    />
    </div>
  );
}

export default App;
