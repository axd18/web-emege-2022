import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return ( 
        
        <header>
            <nav className="md:bg-transparent bg-white absolute w-full h-14 items-center justify-center px-2 md:bg-opacity-0 z-10">
                <div className="container md:bg-transparent bg-white px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="inline-block mr-4  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer"><img src="/logo-emege.png"/></a>
                        </Link>
                        <button
                        className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded   block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <i className="fas fa-bars"></i>
                        </button>
                    </div>
                <div
                    className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto font-semibold">
                    
                    <li className="nav-item pr-10">
                    <Link href="/patagonia"
                        // activeClass="active"
                        // to="patagonia"
                        // spy={true}
                        // smooth={true}
                        // offset={-70}
                        // duration={500}
                        >
                        <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Línea Patagonia</a>
                    </Link>
                    </li>
                    <li className="nav-item pr-10">
                    <Link href="/euro">
                        <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Línea Euro</a>
                    </Link>
                    </li>
                    <li className="nav-item pr-10">
                    <Link href="/termos">
                        <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Termotanques</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contacto">
                            <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Asistencia</a>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
      </nav>
        </header>
     );
}
 
export default Navbar;