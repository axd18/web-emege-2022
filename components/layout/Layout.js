import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';



const Layout = ({children, header = true}) => {
    
    
    return ( 
        <>
            <Head>
                <title>Emegé</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
                {/* <link rel="stylesheet" href="../package/swiper-bundle.min.css"></link> */}
            </Head>
            {
                header && (
                    <header>
                <Navbar />
            </header>
                )
            }
            <main>
                {children}
            </main>
            
            <footer>
                <div className="mt-44 w-full border-t border-gray-200 text-center"></div>
                <Footer />
            </footer>
        </>
     );
}
 
export default Layout;