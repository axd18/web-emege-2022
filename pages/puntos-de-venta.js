import React from "react";
import Layout from "../components/layout/Layout";

const PuntosDeVenta = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-64 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0mardelplata+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full p-8 rounded-lg md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-600 text-lg mb-1 font-medium title-font mb-8">
              Buscá Puntos de venta
            </h2>
            <div className="relative mb-4">
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
                  <option>Santa Fé</option>
                </select>
              </div>
            </div>
            <div className="relative mb-4">
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
                  <option>Bahía Blanca</option>
                </select>
              </div>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buscar
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PuntosDeVenta;
