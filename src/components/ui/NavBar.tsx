import { useState } from 'react';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-lg fixed top-0 z-20">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 ">
                <div className="flex-shrink-0">
                    <a href='/'>
                        <img src='/logo.svg' className='w-52' />
                    </a>
                </div>

                {/* Menu para escritorio */}
                <div className="hidden lg:flex space-x-8">
                    <a href="/" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
                    <a href="/about-me" className="text-gray-700 hover:text-blue-600 transition">Sobre mí</a>
                    <a href="/services" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
                    <a href="/projects" className="text-gray-700 hover:text-blue-600 transition">Proyectos</a>
                    <a href="/products" className="text-gray-700 hover:text-blue-600 transition">Productos</a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
                </div>

                {/* Botón */}
                <div className="hidden lg:block">
                    <a href='/cv_2024.pdf' className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition" download>
                        CV
                    </a>
                </div>

                {/* Botón de menú móvil */}
                <button
                    className="lg:hidden flex items-center text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li><a href="#about" className="text-gray-700 hover:text-blue-600">Sobre mí</a></li>
                        <li><a href="#services" className="text-gray-700 hover:text-blue-600">Servicios</a></li>
                        <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a></li>
                        <li>
                            <button className="bg-blue-600 text-white w-full px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                                CV
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

