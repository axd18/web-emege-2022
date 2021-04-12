// import Head from 'next/head'
import Layout from '../components/layout/Layout';
import { termos } from '../cards'

const Index = () => {
  return (
    <div>
      <Layout>
        {/* Main */}
        <div className="">
              <img src="/img-main-euro.jpg"/>
        </div>

        {/* Sección Patagonia */}
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container px-5 md:px-40 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Línea Patagonia</h1>
      <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9020.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB 1900 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>14 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 12 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9030.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB o TBU 3500 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>23 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 50 cm</li>
                      <li>Prof.: 12 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9050.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB o TBU 5000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>37 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 72,5 cm</li>
                      <li>Ancho: 55 cm</li>
                      <li>Prof.: 17,5 cm</li>
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
          </div>
        </section>

        {/* Sección Euro */}
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container px-5 md:px-40 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Línea Euro</h1>
      <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2120.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB 2000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>15 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 13 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2135.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB o TBU 3500 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>26 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 50 cm</li>
                      <li>Prof.: 13 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2155.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">TB o TBU 5000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>40 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 65 cm</li>
                      <li>Prof.: 19 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2135.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">Sin salida 3000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>23 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 13 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2155.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">Sin salida 5000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>37 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 50 cm</li>
                      <li>Prof.: 13 cm</li>
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

              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden shadow-md">
                  <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/2155.jpg" alt="blog"/>
                  <div className="p-6 bg-white">
                    <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">Sin salida 8000 Kcal.</h1>
                    <ul className="leading-relaxed mb-3">
                      <li className="font-medium">Área a calefaccionar: </li>
                      <li>60 m². <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li className="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 65 cm</li>
                      <li>Prof.: 19 cm</li>
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
          </div>
        </section>

        {/* Sección Termos */}
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container px-5 md:px-40 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Línea termotanques</h1>
            <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
          </div>
          <div className="md:flex">
          {
            termos.map(({title, aislacion, potencia, tiraje, conexion, ancho, alto, image }) => (

              <div className="flex flex-wrap md:w-1/3">
                <div className="p-4">
                  <div className="h-full rounded-lg overflow-hidden shadow-md">
                    {/* <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/rs-120.jpg" alt="blog"/> */}
                    <img className="lg:h-auto md:h-auto w-auto object-cover object-center" src={image} alt="producto"/>
                    <div className="p-6 bg-white">
                      <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">{title}</h1>
                      <ul className="leading-relaxed mb-3 font-normal">
                        <li>{aislacion}</li>
                        <li>{potencia}</li>
                        <li>{tiraje}</li>
                        <li>{conexion}</li>
                        <li>{ancho}</li>
                        <li>{alto}</li>
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
    </div>
  );
}

export default Index;
