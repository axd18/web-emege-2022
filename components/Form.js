import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

// LLama a la función init con el id de Emailjs como parámetro.
init("user_GnpFV1jrQVC88MXQCxSGg");

const Form = () => {
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
    sendForm("service_jcjqzlh", "template_n2r3s8a", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage(
          "Tu mensaje ha sido enviado. ¡Muchas Gracias!"
        );
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 1000);
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
              className="container px-5 py-24 mx-auto"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col text-center w-full mb-12 mt-24">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
                  Enviános tu consulta.<br></br>
                  Y nos ponemos en contacto a la brevedad.
                </h1>
                {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  y nos ponemos en contacto a la brevedad.
                </p> */}
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

              <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap md:p-8 p-4 shadow-md">
                  
                  {/*Nombre*/}
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        maxLength="30"
                        {...register("user_name", { required: true })}
                      ></input>
                      {errors.user_name?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          El nombre es requerido.
                        </p>
                      )}
                    </div>
                  </div>

                  {/*Email*/}
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_email", { required: true })}
                      ></input>
                      {errors.user_email?.type === "required" && (
                        <p className="text-xs text-red-500">
                          El email es requerido.
                        </p>
                      )}
                    </div>
                  </div>

                   {/*Localidad*/}
                   <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600">
                        Localidad
                      </label>
                      <input
                        type="text"
                        name="user_localidad"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_localidad", { required: true })}
                      ></input>
                      {errors.user_localidad?.type === "required" && (
                        <p className="text-xs text-red-500">
                          La localidad es requerida.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/*Provincia*/}
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600">
                        Provincia
                      </label>
                      <input
                        type="text"
                        name="user_provincia"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_provincia", { required: true })}
                      ></input>
                      {errors.user_provincia?.type === "required" && (
                        <p className="text-xs text-red-500">
                          La provincia es requerida.
                        </p>
                      )}
                    </div>
                  </div>

                  {/*Mensaje*/}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600">
                        Mensaje
                      </label>
                      <textarea
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        name="message"
                        {...register("message", { required: true })}
                      ></textarea>
                      {errors.user_name?.type === "required" && (
                        <p className="text-xs text-red-500">
                          El mensaje es requerido.
                        </p>
                      )}
                    </div>
                  </div>

                  <label className="leading-7 text-sm text-gray-600">
                        Mensaje
                      </label>    
                  <a className="p-2 w-full">
                    <input
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      type="submit"
                      value="Enviar"
                    />
                  </a>
                  <p className="status-message flex mx-auto text-center">
                    {statusMessage}
                  </p>
                </div>
                {/* <div className="text-white px-6 py-4 border-0 rounded relative mt-6 text-center bg-green-500 status-message">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-check" />
          </span>
          <span className="inline-block align-middle mr-8">
          {statusMessage}
          </span>
          </div> */}
              </div>
            </form>
          </section>
        </>
      
    </div>
  );
};

export default Form;
