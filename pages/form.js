
// import Layout from '../components/layout/Layout';

// const Asistencia = () => {
//   return (
//     <div>
//       <Layout>
//         <>
//         <section className="text-gray-600 body-font ">
//           <div className="container px-5 py-24 mx-auto">
//             <div className="flex flex-col text-center w-full mb-12 mt-24">
//               <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Solicitud de Servicio técnico</h1>
//               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Si necesitás un servicio post venta en cualquier lugar del país,
//                 por favor completá el htmlFormulario o comunicate con nosotros a través de nuestras vías de contacto: Teléfono:00000 / Email: info@emege.ar
//                 y en breve te contactaremos.</p>
//             </div>
//           <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto">
//           <div className="flex flex-wrap -m-2">
//             <div className="p-2 w-full">
//               <div className="relative">
//                 <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre y Apellido</label>
//                 <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//               </div>
//             </div>
//             <div className="p-2 md:w-1/2 w-full">
//               <div className="relative">
//                 <label htmlFor="name" className="leading-7 text-sm text-gray-600">Dirección (calle y número)</label>
//                 <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//               </div>
//             </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Piso / Depto / Otros datos</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/3 w-full">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Ciudad</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/3 w-1/3">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Código postal</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/3 w-2/3">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Provincia</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Teléfono</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//           <label htmlFor="email" className="leading-7 text-sm text-gray-600">Producto</label>
//             <select type="email" id="email" name="email" className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
//               <option>Patagonia TB 1900 kcal.</option>
//               <option>Patagonia TB o TBU 3500 kcal.</option>
//               <option>Patagonia TB o TBU 5000 kcal.</option>
//               <option>Euro TB 2000 kcal.</option>
//               <option>Euro TB o TBU 3500 kcal.</option>
//               <option>Euro TB o TBU 5400 kcal.</option>
//               <option>Euro Sin salida 5000 kcal.</option>
//               <option>Euro Sin salida 8000 kcal.</option>
//               <option>Termotanque a gas 120 lts.</option>
//               <option>Termotanque a gas 80 lts.</option>
//               <option>Termotanque a gas 50 lts.</option>
//               <option>Termotanque eléctrico 95 lts.</option>
//               <option>Termotanque eléctrico 65 lts.</option>
//               <option>Termotanque eléctrico 40 lts.</option>
//             </select>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Nº de serie</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Instalador</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nº de matrícula del instalador</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/4 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Factura Nº</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 md:w-1/2 w-full">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">zarsador</label>
//             <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <div className="relative">
//             <label htmlFor="message" className="leading-7 text-sm text-gray-600">Comentarios</label>
//             <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
//         </div>
        
//       </div>
//     </div>
//   </div>
// </section>
//         </>
//       </Layout>
//     </div>
//   );
// }

// export default Asistencia;