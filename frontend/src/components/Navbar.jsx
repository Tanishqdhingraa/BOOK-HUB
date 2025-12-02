import React, { useEffect, useState } from "react";
import Login1 from "../assets/login/Login1";
import { Link } from "react-router-dom";
import realsound from "../assets/realsound.mp3";
import { FiMenu, FiX } from "react-icons/fi";

function soundeffect() {
    new Audio(realsound).play();
}

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/course">Best-Books</a></li>
            <li><a href="/Chats">Chats</a></li>
            <li><a href="/about">About</a></li>
        </>
    );

    return (
        <div
            className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
            transition-all duration-300 ease-in-out
            ${sticky
                ? "shadow-lg bg-white/80 backdrop-blur-md dark:bg-indigo-600/80 text-gray-900 dark:text-white"
                : "bg-transparent dark:bg-slate-900/60 text-white"
            }`}
        >
            <div className="navbar mt-4">
                
                {/* Left Logo */}
                <div className="navbar-start flex items-center gap-2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScejxxl0pnVtLDLoAsiVBCMxXaRR5EWeAb35XOuf0Q2_Rpb6EaNtrURhCsjnU0DKonpqw&usqp=CAU"
                        alt="BookHub Logo"
                        className="w-10 h-10 object-contain cursor-pointer"
                    />
                    <a className="text-2xl font-extrabold cursor-pointer">BOOK-HUB</a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center font-extrabold hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 font-bold space-x-7">
                        {navItems}
                    </ul>
                </div>

                {/* Right section */}
                <div className="navbar-end space-x-3 hidden lg:flex">
                    <Link to="/Login1">
                        <button
                            onClick={soundeffect}
                            className="cursor-pointer px-6 py-2 mx-4 text-white font-semibold rounded-3xl bg-gradient-to-r bg-indigo-800 hover:bg-emerald-800 transition-all duration-300"
                        >
                            LOGIN NOW
                        </button>
                    </Link>
                </div>

                {/* MOBILE MENU ICON */}
                <div className="lg:hidden flex items-center ml-auto">
                    <button onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? (
                            <FiX size={30} className="text-white" />
                        ) : (
                            <FiMenu size={30} className="text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {mobileMenu && (
                <div className="lg:hidden bg-indigo-600 text-white w-full mt-2 rounded-xl shadow-md p-4 space-y-4 animate-fadeIn">
                    <ul className="flex flex-col gap-4 text-lg font-semibold">
                        {navItems}
                    </ul>

                    <Link to="/Login1">
                        <button
                            onClick={soundeffect}
                            className="w-full mt-4 cursor-pointer px-6 py-3 text-white font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
                        >
                            LOGIN NOW
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
