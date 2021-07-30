import React, { useState } from "react";
import ResultadoBusqueda from "../components/ResultadoBusqueda";
// import useLocalidades from '../hooks/useLocalidades';

import Layout from "../components/layout/Layout";
// import axios from 'axios'

const Asistencia = () => {
  // const [ localidades, guardarLocalidades ] = useState([]);
  // const { Localidades } = useLocalidades(localidades);

  return (
    <Layout>
      <div>
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12 mt-24">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
                Buscá nuestros representantes técnicos
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Encontrá nuestros representantes técnicos en todo el país.
              </p>
            </div>
            <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto p-10 rounded-md">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 md:w-1/3 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Tipo de Service
                    </label>
                    <select
                      type="email"
                      id="email"
                      name="email"
                      className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Service de gas</option>
                      <option>Service de eléctricos</option>
                    </select>
                  </div>
                </div>

                <div className="p-2 md:w-1/3 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Provincia
                    </label>
                    <select
                      type="email"
                      id="email"
                      name="email"
                      className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Buenos Aires</option>
                    </select>
                  </div>
                </div>

                <div className="p-2 md:w-1/3 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Localidad
                    </label>
                    <select
                      type="email"
                      id="email"
                      name="email"
                      className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Mar del Plata</option>
                    </select>
                  </div>
                </div>
                <div className="p-6 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Buscar representante
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ResultadoBusqueda />
      </div>
    </Layout>
  );
};

export default Asistencia;
