// import Head from 'next/head'
import Layout from '../components/layout/Layout';

const Index = () => {
  return (
    <div>
      <Layout>
        {/* Main */}
        <div className=""> 
              <img src="/img-main-euro.jpg"/>
        </div>
        
        {/* Sección Patagonia */}
        <section class="bg-gray-200 text-gray-600 body-font">
          <div class="container px-5 md:px-40 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Línea Patagonia</h1>
      <div class="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-lg overflow-hidden shadow-md">
                  <img class="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9020.jpg" alt="blog"/>
                  <div class="p-6 bg-white">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 class="title-font text-3xl font-bold text-gray-900 mb-3">TB 1900 Kcal.</h1>
                    <ul class="leading-relaxed mb-3">
                      <li class="font-medium">Área a calefaccionar: </li>
                      <li>14 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li class="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 12 cm</li>
                    </ul>
                    <div class="flex items-center flex-wrap ">
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Descargar manual</span>
                    </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-lg overflow-hidden shadow-md">
                  <img class="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9020.jpg" alt="blog"/>
                  <div class="p-6 bg-white">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 class="title-font text-3xl font-bold text-gray-900 mb-3">TB 1900 Kcal.</h1>
                    <ul class="leading-relaxed mb-3">
                      <li class="font-medium">Área a calefaccionar: </li>
                      <li>14 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li class="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 12 cm</li>
                    </ul>
                    <div class="flex items-center flex-wrap ">
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Descargar manual</span>
                    </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/3">
                <div class="h-full rounded-lg overflow-hidden shadow-md">
                  <img class="lg:h-auto md:h-auto w-auto object-cover object-center" src="/../img/9020.jpg" alt="blog"/>
                  <div class="p-6 bg-white">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                    <h1 class="title-font text-3xl font-bold text-gray-900 mb-3">TB 1900 Kcal.</h1>
                    <ul class="leading-relaxed mb-3">
                      <li class="font-medium">Área a calefaccionar: </li>
                      <li>14 m2. <span className="text-xs">(Altura de techo hasta 2,7 m aprox.)</span></li>
                      <li class="font-medium">Medidas:</li>
                      <li>Altura: 61 cm</li>
                      <li>Ancho: 31 cm</li>
                      <li>Prof.: 12 cm</li>
                    </ul>
                    <div class="flex items-center flex-wrap ">
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Descargar manual</span>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </Layout>
    </div>
  );
}

export default Index;
