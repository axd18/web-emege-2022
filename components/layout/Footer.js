import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img className="w-20 h-auto" src="/logo-emege.png" />
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Coppens S.A Calle 5 entre 2 y 4 Parque Ind. Gral. Savio Ruta 88
              Km. 6,5 (7601) Batán, Mar del Plata, Bs. As., Argentina.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm ">
                REDES
              </h2>
              <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                <span className="inline-flex md:mt-0 sm:mt-0 justify-center sm:justify-start">
                  <Link href="https://www.facebook.com/Emeg%C3%A9-Calefacci%C3%B3n-296892737661764/?ref=page_internal">
                    <a target="blank" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/emegearg/?hl=es-la">
                    <a target="blank" className="ml-3 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
                CONTACTO
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    info@emegecalefaccion.com.ar
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    +54 (0223) 464-1124 / 1636
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
