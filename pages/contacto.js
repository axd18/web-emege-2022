
import Layout from '../components/layout/Layout';
import emailjs from 'emailjs-com';

const Asistencia = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jcjqzlh', 'template_n2r3s8a', e.target, 'user_GnpFV1jrQVC88MXQCxSGg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <div>
      <Layout>
        <>
        <section className="text-gray-600 body-font ">
          <form className="container px-5 py-24 mx-auto" onSubmit={sendEmail}>
            <div className="flex flex-col text-center w-full mb-12 mt-24">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Solicitud de Servicio técnico</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Si necesitás un servicio post venta en cualquier lugar del país,
                por favor completá el formulario o comunicate a través de nuestras vías de contacto: Teléfono: <span className="font-bold">464-1124 / 1636</span> | Email: info@emege.ar</p>
            </div>
          <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Nombre y Apellido</label>
                <input type="text" name="from_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>
        <div className="p-2 md:w-1/2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" name="from_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 md:w-1/2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Provincia</label>
            <input name="from_provincia" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 md:w-1/2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Localidad</label>
            <input name="from_localidad" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Comentarios</label>
            <textarea name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
        </div>
        
      </div>
    </div>
  </form>
</section>
        </>
      </Layout>
    </div>
  );
}

export default Asistencia;