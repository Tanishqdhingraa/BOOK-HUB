import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

    // function to handle button click
    const handleNavigate = () => {
        navigate("/Login1"); // 👈 make sure this path matches your route in App.jsx
    };

    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
                    <div className="space-y-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Hello, welcomes here to learn something{" "}
                            <span className="text-indigo-600">new everyday!!!</span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            Welcome to Book Hub - your one-stop digital library for college students. Discover, borrow, and share books with ease while connecting with fellow learners. Whether you’re preparing for exams, exploring new subjects, or looking for references, Book Hub makes knowledge accessible anytime, anywhere.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button
                        onClick={handleNavigate}
                        className="mt-6 px-6 py-3 rounded-3xl text-white font-semibold 
                                bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 
                                shadow-lg hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600 
                                hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>
                <div className=" order-1 w-full mt-32 md:w-1/2">
                   <img
                        src="https://images.unsplash.com/photo-1709385283507-0dca42afa409?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="md:w-[650px] md:h-[520px] md:ml-12 rounded-2xl shadow-lg object-cover"
                        alt="banner"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
