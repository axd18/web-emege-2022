import React from 'react';
import Layout from '../components/layout/Layout';
import Form from '../components/Form';
import Navbar from '../components/layout/Navbar';
import ChapaMarcado from '../components/ChapaMarcado';


const Contacto = () => {
    return ( 
        <>
            <Layout>
                <Navbar />
                <ChapaMarcado />
                <Form />
            </Layout>
        </>
     );
}
 
export default Contacto;