import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className=" bg-indigo-950 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-gray-800">Follow Book-Hub</h1>

      <div className="flex space-x-8">  
        {/* Instagram */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <FaInstagram className="text-pink-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Book-Hub</p>
        </div>

        {/* Facebook */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <FaFacebook className="text-blue-600 text-5xl mb-3" />
          <p className="text-lg font-semibold">Book-Hub</p>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <FaWhatsapp className="text-green-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Book-Hub</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
