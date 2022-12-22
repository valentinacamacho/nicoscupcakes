import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import '../StylesSheet/Styles.css'
import avatar from '../assets/Images/avatar.png'


function VistaSecun (){
    return(
      <div className="vistasecun">

        <Header/>


          <div className='Recuadro-Vistasecun'>
            <div className='avatar'>
              <img 
                src={avatar}
                alt='avatar'/>
            <div className='boton-vistasecun'>
              <button >Conoce Nuestros Productos</button>
            </div>
          </div>
          

        <div className='texto1-secun'>
          <h1 className='titulo-secun'>¡Quienes somos!</h1>
          <p>En Nico’s Cupcakes creamos deliciosos dulces y mini reposteria, con exquisitas recetas y sabores originales; hechos con ingredientes de alta calidad.</p>
          <p>Ofrecemos deliciosos Cupcakes, Mini tortas y paletas de pastel</p>
          <p>Somos un emprendimiento artesanal donde dedicamos el tiempo necesario a las necesidades del cliente</p>
        </div>      
      </div>

        < Footer
          texto1='Derechos reservados-Nico´s Cupcakes'
          texto2='2022'
        />

      </div>
    );
}

export default VistaSecun;