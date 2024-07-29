import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return <>

        <header className="navColor">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Link to="">START FRAMEWORK</Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            <li><NavLink to="about" className="text-white">About</NavLink></li>
                            <li><NavLink to="port" className="text-white">Portofolio</NavLink></li>
                            <li><NavLink to="Contact" className="text-white">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mobile-menu hidden md:hidden">
                    <ul className="mt-4 space-y-4">
                        <li><NavLink to="about" className="block px-4 py-2 text-white bg-gray-900 rounded">About</NavLink></li>
                        <li><NavLink to="Portofolio" className="block px-4 py-2 text-white bg-gray-900 rounded">Portofolio</NavLink></li>
                        <li><NavLink to="Contact" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</NavLink></li>
                    </ul>
                </div>

            </nav>
        </header>
    </>
}
