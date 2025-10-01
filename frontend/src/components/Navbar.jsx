import React, { useEffect, useState } from "react";
import Login1 from "../assets/login/Login1";
import { Link } from "react-router-dom";
import realsound from "../assets/realsound.mp3"

function soundeffect(){
        new Audio(realsound).play();
    }

function Navbar() {

    
    // Theme state
    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    // );
    // const element = document.documentElement;


    // // Handle theme switching
    // useEffect(() => {
    //     if (theme === "dark") {
    //         element.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //         document.body.classList.add("dark");
    //     } else {
    //         element.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //         document.body.classList.remove("dark");
    //     }
    // }, [theme]);

    // Sticky navbar state
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Nav items
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

                {/* Left: Logo */}
                <div className="navbar-start flex items-center gap-2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScejxxl0pnVtLDLoAsiVBCMxXaRR5EWeAb35XOuf0Q2_Rpb6EaNtrURhCsjnU0DKonpqw&usqp=CAU"   // replace with your logo path (e.g. /public/logo.png)
                        alt="BookHub Logo"
                        className="w-10 h-10 object-contain cursor-pointer"
                    />
                    <a className="text-2xl font-extrabold cursor-pointer">BOOK-HUB</a>
                </div>


                {/* Center: Menu */}
                <div className="navbar-center font-extrabold hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 font-bold space-x-7">
                        {navItems}
                    </ul>
                </div>

                {/* Right: Search + Theme toggle */}
                <div className="navbar-end space-x-3">
                    {/* Search bar */}
                    <div className="hidden md:block">
                        <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                            <input
                                type="text"
                                className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 
                  2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 
                  7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>

                    {/* Theme Toggle */}
                    {/* <label className="swap swap-rotate mx-2.5">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        /> */}

                        {/* Sun icon */}
                        {/* <svg
                            className="swap-off h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg> */}

                        {/* Moon icon */}
                        {/* <svg
                            className="swap-on h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,5.05,5.05,0,0,1-3.37.73A8.15,5.15,0,0,1,9.08,5.49a8.59,5.59,0,0,1,.25-2A1,1,0,0,0,5,2.36,5.14,5.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,5.14,0,0,1,7.08,5.22v.27A10.15,5.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,5.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label> */}


                    {/* LOGIN BUTTON */}
                    <Link to="/Login1">
                        <button   
                        onClick={soundeffect} className="cursor-pointer px-6 py-2 mx-4 text-white font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:from-pink-500 hover:to-yellow-500 transition-all duration-300">
                            LOGIN NOW 
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
