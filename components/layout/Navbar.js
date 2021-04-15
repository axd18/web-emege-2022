import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return ( 
        
        <header>
            <nav className="bg-gray-400 absolute w-full items-center justify-center px-2 md:bg-opacity-0">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className="inline-block mr-4  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer">
                            <img src="/logo-emege.png"/>
                        </div>
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
                        <Link href="/"
                            className=" py-2 flex items-center text-lg leading-snug text-white hover:opacity-75 cursor-pointer"
                            >Línea Patagonia
                        </Link>
                    </li>
                    <li className="nav-item pr-10">
                        <Link href="/"
                            className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
                            >Línea Euro
                        </Link>
                    </li>
                    <li className="nav-item pr-10">
                        <Link href="/"
                        className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
                        >Termotanques
                        </Link>
                    </li>
                    <li className="nav-item pr-10">
                        <Link href="/"
                            className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
                            >Asistencia
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contacto"
                        activeClass="active"
                        className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
                        >Contacto
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