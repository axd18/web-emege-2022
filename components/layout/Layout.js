import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Scroll from "../Scroll";

const Layout = ({ children, header = true }) => {
  return (
    <>
      <Head>
        <title>Emegé</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </Head>
      {header && (
        <header>
          <Navbar />
        </header>
      )}
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
      <Scroll />
    </>
  );
};

export default Layout;
