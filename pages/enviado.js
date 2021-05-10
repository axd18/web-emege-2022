import Layout from '../components/layout/Layout';
import Link from 'next/link';

const Enviado = () => {
    return ( 
        <Layout header={false}>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                
                <div className=" mx-auto p-4 md:w-1/3 text-center">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
                    <div className="p-6">
                        
                        <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">¡Recibimos tu mensaje!</h1>
                        <p className="leading-relaxed mb-3 text-lg">Muchas gracias por escribirnos.Te contactaremos dentro de las 24 hs.</p>
                        <div className="flex items-center flex-wrap">
                        <Link href="/">
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Volver a inicio</button>
                        </div>
                        </Link>
                                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
</section>
        
        
        
        
        
        
        {/* <div className="container mt-42 mx-auto px-5 py-24 max-w-md w-full lg:flex">
            <div className=" lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img className=" w-auto" src="img-test.jpg"/>
            </div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                
                <div className="text-black font-bold text-2xl mb-2">¡Recibimos tu mensaje!</div>
                <p className="text-grey-darker text-base">Gracias, pronto te contactaremos.</p>
                </div>
            </div>
        </div> */}
        </Layout>
     );
}
 
export default Enviado;