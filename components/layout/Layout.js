import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>Emegé</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
                <link rel="stylesheet" href="../package/swiper-bundle.min.css"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
            </Head>
            
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
     );
}
 
export default Layout;