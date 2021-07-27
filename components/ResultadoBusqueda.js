import React from 'react';

const ResultadoBusqueda = () => {
    return ( 
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-600">Representantes encontrados</h1>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Ciudad</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Nombre</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Dirección</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Mar del Plata</td>
            <td class="px-4 py-3">Saccón, Gustavo</td>
            <td class="px-4 py-3">Corrientes 4631</td>
            <td class="px-4 py-3">(0223) 495-1166</td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Mar del Plata</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">Altamiranda Luis</td>
            <td class="border-t-2 border-gray-200 px-4 py-3"></td>
            <td class="border-t-2 border-gray-200 px-4 py-3">(0223) 156860025 /4650250</td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Mar del Plata</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">MDQ GAS</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">Foral De Navarra 1123</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">0223 154 23-9278</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</section>
     );
}
 
export default ResultadoBusqueda;