import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-stone-100 shadow-md">

            <div className="flex items-center gap-3">
                <img
                    src="https://i.pinimg.com/1200x/81/e4/a8/81e4a8120fe4993961e40997e4ca60cf.jpg"
                    alt="Logo"
                    className="h-14 w-14 rounded-full object-cover"
                />
                <span className="hidden sm:block font-semibold text-stone-800">
                    Elysian
                </span>
            </div>

            <div className="flex-1 max-w-md mx-6 hidden md:block">
                <div className="flex items-center rounded-full bg-stone-200 px-4 py-2 focus-within:ring-2 focus-within:ring-amber-600 transition">
                    <input
                        type="text"
                        placeholder="Search jewellery..."
                        className="w-full bg-transparent outline-none text-stone-800 placeholder-stone-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6 text-stone-700">

                <Link
                    smooth
                    to="#contact"
                    className="transition-colors duration-300 hover:text-amber-700"
                >
                    Contact
                </Link>

                <Link
                    smooth
                    to="#about"
                    className="transition-colors duration-300 hover:text-amber-700"
                >
                    About
                </Link>

                <Link
                    smooth
                    to="#cart"
                    className="transition-colors duration-300 hover:text-amber-700"
                >
                    Cart
                </Link>

                <Link
                    smooth
                    to="#add-to-cart"
                    className="rounded-full bg-amber-700 px-4 py-2 text-white transition-all duration-300 hover:bg-amber-800 active:scale-95"
                >
                    Add to Cart
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
