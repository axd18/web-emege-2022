import Layout from '../components/layout/Layout';
import { euro } from '../cards'
import Link from 'next/link';

const Euro = () => {
    return ( 
        <Layout>
        <section className="body-font">
          <div className="py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full bg-gray-100 md:py-24 px-10 relative mb-4">
              <img alt="gallery" className="w-full object-cover md:h-auto object-center block absolute inset-0" src="img-section-main-euro-2.jpg"/>
            </div>
          </div>
        </section>
        
        
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container md:mt-60 px-5 md:px-40 md:py-24 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">Línea Euro</h1>
            <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
          </div>
          <div className="md:flex flex-wrap">
            { 
              euro.map(({title, area, span, medidas, image, manual}) => (

                <div className="flex flex-wrap md:w-1/4">
                <div className="p-4">
                  <div className="h-full rounded-lg overflow-hidden shadow-md">
                    <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src={image} alt="producto"/>
                    <div className="p-6 bg-white text-gray-600">
                      <h1 className="title-font text-2xl font-bold mb-3">{title}<span className="text-sm"> Kcal.</span></h1>
                      <ul className="leading-relaxed mb-3">
                        <li className="font-medium">Área a calefaccionar: </li>
                        <li>{area}<span className="text-xs">{span}</span></li>
                        <li className="font-medium">Medidas:</li>
                        <li>{medidas.alto}</li>
                        <li>{medidas.ancho}</li>
                        <li>{medidas.profundidad}</li>
                      </ul>
                      <div className="flex items-center flex-wrap" >
                        <Link href={`https://emegecalefaccion.com.ar/manuales/${manual}`}>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Descargar manual</span>
                      </button>
                      </Link>
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
 
export default Euro;