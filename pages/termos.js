import Layout from "../components/layout/Layout";
import { termos } from '../cards'

const Termos = () => {
    return ( 
        <Layout>
        <section className=" body-font">
          <div className="py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full h-96 bg-gray-400 py-32 px-10 relative">
              {/* <img alt="gallery" className="w-full object-cover h-96 object-center block absolute inset-0" src="img-section-euro.jpg"/> */}
            </div>
          </div>
        </section>
        
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container px-5 md:px-40 py-24 mx-auto" id="termos">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">Termotanques</h1>
            <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
          </div>
          <div className="md:flex flex-wrap">
          {
            termos.map(({title, aislacion, potencia, tiraje, conexion, ancho, alto, image }, i) => (

              <div className="flex flex-wrap md:w-1/3" key={i}>
                <div className="p-4">
                  <div className="h-full rounded-lg overflow-hidden shadow-md">
                    <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src={image} alt="producto"/>
                    <div className="p-6 bg-white">
                      <h1 className="title-font text-3xl font-bold text-gray-600 mb-3">{title}</h1>
                      <ul className="leading-relaxed mb-3 font-normal">
                        <li>{aislacion}</li>
                        <li>{potencia}</li>
                        <li>{tiraje}</li>
                        <li>{conexion}</li>
                        <li>{alto}</li>
                        <li>{ancho}</li>
                      </ul>
                      <div className="flex items-center flex-wrap ">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                      <span>Descargar manual</span>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          </div>
        </section>
        </Layout>
     );
}
 
export default Termos;