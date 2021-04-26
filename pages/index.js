// import Head from 'next/head'
import Layout from '../components/layout/Layout';
import  Navbar  from '../components/layout/Navbar';
import Slide from '../components/Slide';

import Link from 'next/link';

const Index = () => {
  return (
    <div className="text-gray-200">
      <Layout>
        {/* Main */}
        <Navbar />
        {/* <div className="">
              <img src="/img-main-euro.jpg"/>
        </div> */}
        <Slide />
        {/* Secciones */}
      <section className=" body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="md:w-2/3 w-full mx-auto">
              <Link href="/patagonia">
                <a className="flex flex-wrap w-full  bg-gray-100 md:py-32 px-10 relative mb-4">
                  <img alt="gallery" className="w-full object-cover h-42 object-center block absolute inset-0" src="img-section-patagonia.jpg"/>
                  {/* <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                    <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                  </div> */}
                </a>
              </Link>
              <div className="flex flex-wrap -mx-2 mt-44">
                <div className="px-2 md:w-1/2 w-full">
                  <Link href="/euro">
                  <a className="flex flex-wrap w-full bg-gray-100 md:py-24 py-32 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-42 object-center block absolute inset-0" src="img-section-euro.jpg"/>
                    {/* <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                    </div> */}
                  </a>
                  </Link>
                </div>
                <div className="px-2 md:w-1/2 w-full">
                  <Link href="/termos">
                  <a className="flex flex-wrap w-full bg-gray-100 md:py-24 py-16 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-42 object-center block absolute inset-0" src="img-section-termo.jpg"/>
                    {/* <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                    </div> */}
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
}

export default Index;
