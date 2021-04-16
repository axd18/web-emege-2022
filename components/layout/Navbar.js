import React from 'react';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

const Navbar = () => {
    
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return ( 
        
        <header>
            <nav className="bg-gray-400 absolute w-full items-center justify-center px-2 md:bg-opacity-0">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="inline-block mr-4  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer"><img src="/logo-emege.png"/></a>
                        </Link>
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent  block lg:hidden outline-none focus:outline-none"
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
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-semibold">
                    
                    <li className="nav-item pr-10">
                    <Scroll
                        activeClass="active"
                        to="patagonia"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Línea Patagonia</a>
                    </Scroll>
                    </li>
                    <li className="nav-item pr-10">
                    <Scroll
                        activeClass="active"
                        to="euro"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Línea Euro</a>
                    </Scroll>
                    </li>
                    <li className="nav-item pr-10">
                        <Link href="/">
                            <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Termotanques</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contacto">
                            <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Contacto</a>
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