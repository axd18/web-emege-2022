import React from "react";
import Layout from "../components/layout/Layout";
import { faq } from '../cards';

const Faq = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-600">
              Preguntas Frecuentes
            </h1>
          </div>
          <div class="sm:mx-auto sm:mb-2 -mx-2 ">
            <div class="w-1/2 px-4 py-2">
              
              { faq.map(({title, texto}, i) => (
                <details class="mb-4" key={i}>
                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                        {title}
                    </summary>

                    <span>
                        {texto}
                    </span>
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
