import React from 'react';
import Layout from '../components/layout/Layout';
import FormService from '../components/FormService';
import Navbar from '../components/layout/Navbar';
// import ChapaMarcado from '../components/ChapaMarcado';


const Contacto = () => {
    return ( 
        <>
            <Layout>
                <Navbar />
                {/* <ChapaMarcado /> */}
                <FormService />
            </Layout>
        </>
     );
}
 
export default Contacto;