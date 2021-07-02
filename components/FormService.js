import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import Swal from 'sweetalert2';

// LLama a la función init con el id de Emailjs como parámetro.
init("user_1xeHhIAqEdSO67KBXZPSZ");

const FormService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [statusMessage, setStatusMessage] = useState("Mensaje");

  // Función que toma como parámetros el id del servicio, id del template y el id del form. Y envía los datos del form al email.
  const onSubmit = (data) => {
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#contact-form");
    sendForm("service_8jhyua7", "template_7ifru1a", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        // Alert
        Swal.fire(
          'Tu mensaje ha sido enviado',
          '¡Muchas Gracias!',
          'success'
        );
        // setStatusMessage("Tu mensaje ha sido enviado. ¡Muchas Gracias!");
        // statusMessage.className = "status-message success";
        // setTimeout(() => {
        //   statusMessage.className = "status-message";
        // }, 1000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage(
          "Error al enviar el mensaje, por favor intente de nuevo."
        );
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 2000);
      }
    );
  };

  return (
    <div>
      <>
        <section className="text-gray-600 body-font ">
          <form
            className="md:container px-2 py-24 mx-auto"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col text-center w-full  mt-24">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Solicitud de Servicio técnico</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Si necesitás un servicio post venta en cualquier lugar del país,
                por favor completá el formulario y en breve te contactamos.</p>
            </div>

            <style jsx>{`
              .status-message {
                opacity: 0;
                color: red;
              }
              .success {
                opacity: 1;
              }
              .failure {
                opacity: 1;
              }
            `}</style>

            <div className=" md:px-5 px-0 py-16 mx-auto">
              
              <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto p-8 shadow-md">
                <div className="flex flex-wrap -m-2">
                  
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombre y apellido*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_name", { required: true })}
                      ></input>
                       {errors.user_name?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El nombre y apellido es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Dirección (calle y número)*
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        name="user_direccion"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_direccion", { required: true })}
                      ></input>
                      {errors.user_direccion?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          La dirección es requerida.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="piso"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Piso / Depto / Otros datos*
                      </label>
                      <input
                        type="text"
                        id="piso"
                        name="user_piso"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("user_piso", { required: true })}
                      ></input>
                      {errors.user_piso?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El piso y el depto son requeridos.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="ciudad"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Ciudad*
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="user_ciudad"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_ciudad", { required: true })}
                      ></input>
                      {errors.user_ciudad?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          La ciudad es requerida.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="codpostal"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Código postal*
                      </label>
                      <input
                        type="text"
                        id="codpostal"
                        name="user_codpostal"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_codpostal", { required: true })}
                      ></input>
                      {errors.user_codpostal?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El código postal es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Provincia*
                      </label>
                      <input
                        type="text"
                        id="provincia"
                        name="user_provincia"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_provincia", { required: true })}
                      ></input>
                      {errors.user_provincia?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          La provincia es requerida.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="telefono"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Teléfono*
                      </label>
                      <input
                        type="text"
                        id="telefono"
                        name="user_telefono"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_telefono", { required: true })}
                      ></input>
                      {errors.user_telefono?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El teléfono es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_email", { required: true })}
                      ></input>
                      {errors.user_email?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El email es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="producto"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Producto*
                      </label>
                      <select
                        type="text"
                        id="producto"
                        name="user_producto"
                        className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_producto", { required: true })}
                      >
                        <option>-- Selecciona el producto --</option>
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
                      {errors.user_producto?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El producto es requerido.
                        </p>
                      )}                   
                    </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="serie"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nº de serie*
                      </label>
                      <input
                        type="text"
                        id="serie"
                        name="user_serie"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("user_serie", { required: true })}
                      ></input>
                      {errors.user_serie?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          Requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="nameinstalador"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombre y apellido del instalador*
                      </label>
                      <input
                        type="text"
                        id="nameinstalador"
                        name="user_nameinstalador"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_nameinstalador", { required: true })}
                      ></input>
                      {errors.user_nameinstalador?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El nombre y apellido del instalador es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nº de matrícula del instalador*
                      </label>
                      <input
                        type="text"
                        id="matricula"
                        name="user_matricula"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_matricula", { required: true })}
                      ></input>
                      {errors.user_matricula?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El Nº de matrícula del instalador es requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="matricula"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Factura Nº*
                      </label>
                      <input
                        type="text"
                        id="factura"
                        name="user_factura"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_factura", { required: true })}
                      ></input>
                      {errors.user_factura?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          Requerido.
                        </p>
                      )}
                    </div>
                  </div>
                 
                  <div className="p-2 md:w-1/3 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Fecha de compra*
                      </label>
                      <input
                        type="date"
                        id="compra"
                        name="user_compra"
                        className="w-full h-11 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_compra", { required: true })}
                      ></input>
                      {errors.user_compra?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Requerido.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Comentario
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div><p className="leading-7 text-sm text-gray-600">* Campos obligatorios.</p></div> 
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Enviar
                    </button>
                  </div>
                  <p className="status-message flex mx-auto text-center">
                    {statusMessage}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    </div>
  );
};

export default FormService;
