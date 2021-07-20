import React from 'react'

const chapaMarcado = () => {
    return (
      
      <section classname="text-gray-600 body-font pt-20">
        
        <div className="flex flex-col text-center w-full mb-12 mt-24">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">
                Antes de contactar al Servicio Post Venta,<br></br>
                por favor mirá qué etiqueta tiene pegada tu equipo.
                </h1>
                {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  y nos ponemos en contacto a la brevedad.
                </p> */}
              </div>
        <div classname="container px-5 pt-24 mx-auto">
          <div classname="flex flex-wrap -mx-4 -mb-10 text-center">
            <div classname="sm:w-1/2 mb-10 px-4">
              <div classname="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  classname="object-cover object-center h-full w-full"
                  src="/01.png"
                />
              </div>
              <h2 classname="title-font text-2xl font-medium mt-6 mb-3">
                Equipos antiguos
              </h2>
              <p classname="leading-relaxed text-lg">
              Si contiene esta etiqueta, deberás comunicarte al número de teléfono <br></br>que figura en el manual de usuario del equipo.
              </p>             
            </div>
            <div classname="sm:w-1/2 mb-10 px-4">
              <div classname="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  classname="object-cover object-center h-full w-full"
                  src="/02.png"
                />
              </div>
              <h2 classname="title-font text-2xl font-medium text mt-6 mb-3">
                Equipos nuevos
              </h2>
              <p classname="leading-relaxed text-lg">
              Si es esta la que corresponde, podrás comunicarte al <br></br><strong>(0223) 464-1124/1636.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    
    );
}
 
export default chapaMarcado;