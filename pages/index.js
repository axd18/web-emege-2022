import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Slide from "../components/Slide";

import Link from "next/link";

const Index = () => {
  return (
    <div className="text-gray-200">
      <Layout>
        <Navbar />

        <Slide />

        <section className=" body-font">
          <div className="container px-5 md:py-24 py-12 mx-auto flex flex-wrap">
            <div className="md:w-2/3 w-full mx-auto">
              <Link href="/patagonia">
                <a className="flex flex-wrap w-full h-96 bg-gray-100 md:py-32 relative mb-4 overflow test">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block absolute inset-0 card-img-top"
                    src="img-section-patagonia.jpg"
                  />
                  <div className="details text-white">
                    <h2 className="text-3xl font-medium title-font mb-2">
                      Línea Patagonia
                    </h2>
                    <p className="leading-relaxed">
                      Calor frontal que llega más rápido a todo el ambiente. +
                      INFO
                    </p>
                  </div>
                </a>
              </Link>
              <div className="flex flex-wrap -mx-2">
                <div className="md:w-1/2 p-2 w-full">
                  <Link href="/euro">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-euro-2.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                          Línea Euro
                        </h2>
                        <p className="leading-relaxed">
                          Diseño compacto que armoniza con cada espacio de tu
                          hogar.
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="md:w-1/2 p-2 w-full">
                  <Link href="/termos">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-termo.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                          Línea Termotanques
                        </h2>
                        <p className="leading-relaxed">
                          Agua caliente al instante y por más tiempo.
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Index;
