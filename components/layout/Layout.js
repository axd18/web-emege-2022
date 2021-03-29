import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Adrián Fernández</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
     );
}
 
export default Layout;