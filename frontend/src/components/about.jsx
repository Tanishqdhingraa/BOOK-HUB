import React from 'react';
import Navbar from './Navbar';
import Footer from './Foot';
import AboutPage from './aboutpage';


function About() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-indigo-950 flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        About BookHub
      </h1>
      <p className="text-lg text-gray-100 max-w-2xl text-center mb-4">
        Welcome to <span className="font-semibold">BookHub</span> — a community built
        for book lovers. Here you can read books, share your thoughts, and connect
        with other readers from around the world.

      </p>
      <p className="text-lg text-gray-100 max-w-2xl text-center">
        Whether you’re looking to explore new titles, join conversations, or simply
        keep track of your reading journey, BookHub makes reading more social and fun.
      </p>
    </div>
    {/* <AboutPage/> */}
    
    <Footer/>
    </>
  );
}

export default About;
