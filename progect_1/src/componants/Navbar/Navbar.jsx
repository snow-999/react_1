import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {

    const [Nav, setNav] = useState(true)

    const click = () => setNav(!Nav)
    return <>

        <header className="navColor">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Link href="">START FRAMEWORK</Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            <li><NavLink to="about" className="text-white">About</NavLink></li>
                            <li><NavLink to="port" className="text-white">Portofolio</NavLink></li>
                            <li><NavLink to="contact" className="text-white">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <i onClick={click} className="text-white cursor-pointer fa-solid fa-bars fa-xl"></i>
                    </div>
                </div>
                <div className={`${Nav ? `hidden` : `block`
                    } mobile-menu`}>
                    <ul className="mt-4 space-y-4">
                        <li><NavLink to="about" className="block px-4 py-2 text-white bg-gray-900 rounded">About</NavLink></li>
                        <li><NavLink to="port" className="block px-4 py-2 text-white bg-gray-900 rounded">Portofolio</NavLink></li>
                        <li><NavLink to="contact" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</NavLink></li>
                    </ul>
                </div>

            </nav>
        </header>
    </>
}
