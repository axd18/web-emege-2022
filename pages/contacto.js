import Layout from '../components/layout/Layout';
import  Navbar  from '../components/layout/Navbar'

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div>
        <section class="text-gray-600 body-font ">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12 mt-24">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Solicitud de Servicio técnico</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Si necesitás un servicio post venta en cualquier lugar del país,
                por favor completá el formulario o comunicate con nosotros a través de nuestras vías de contacto: Teléfono:00000 / Email: info@emege.ar
                y en breve te contactaremos.</p>
            </div>
          <div class="bg-white lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Nombre y Apellido</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>
            <div class="p-2 md:w-1/2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Dirección (calle y número)</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Piso / Depto / Otros datos</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/3 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Ciudad</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/3 w-1/3">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Código postal</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/3 w-2/3">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Provincia</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Teléfono</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
          <label for="email" class="leading-7 text-sm text-gray-600">Producto</label>
            <select type="email" id="email" name="email" class="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option>Patagonia TB 1900 kcal.</option>
              <option>Patagonia TB o TBU 3500 kcal.</option>
              <option>Patagonia TB o TBU 5000 kcal.</option>
              <option>Euro TB 2000 kcal.</option>
              <option>Euro TB o TBU 3500 kcal.</option>
              <option>Euro TB o TBU 5400 kcal.</option>
              <option>Euro Sin salida 5000 kcal.</option>
              <option>Euro Sin salida 8000 kcal.</option>
              <option>Termotanque a gas 120 lts.</option>
              <option>Termotanque a gas 80 lts.</option>
              <option>Termotanque a gas 50 lts.</option>
              <option>Termotanque eléctrico 95 lts.</option>
              <option>Termotanque eléctrico 65 lts.</option>
              <option>Termotanque eléctrico 40 lts.</option>
            </select>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Nº de serie</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Instalador</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Nº de matrícula del instalador</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/4 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Factura Nº</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 md:w-1/2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">zarsador</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Comentarios</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          {/* <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
        </div>
      </div>
    </div>
  </div>
</section>          
        </div>
      </Layout> 

    </div>
  );
}

export default Contacto;