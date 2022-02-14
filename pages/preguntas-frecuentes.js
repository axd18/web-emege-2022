import React from "react";
import Layout from "../components/layout/Layout";
import { faq } from "../cards";

const Faq = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mt-24"></div>
          <div className="mx-auto md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-600 text-3xl title-font font-medium mb-8 text-center">
              Preguntas Frecuentes
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1 cursor-pointer">
                Calefactores
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 cursor-pointer">
                Termotanques
              </a>
            </div>
          </div>
          <div className="">
            <div className="mx-auto md:w-1/2 px-4 py-2">
              {faq.map(({ title, texto }, i) => (
                <details className="mb-4" key={i}>
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    {title}
                  </summary>

                  <span>{texto}</span>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
