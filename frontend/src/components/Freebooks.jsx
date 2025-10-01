import React from "react";
import list from "../../public/list.json";

const Freebooks = () => {
  const filterdata = list.filter((data) => data.price === "free");

  return (
    <div className="px-6 py-16 mt-40 bg-gradient-to-b bg-amber-300">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center text-indigo-700">
        Free Books to Start Reading 📚
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filterdata.map((book) => (
          <div
            key={book.id}
            className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-2xl 
                       hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.title}
              className="h-60 w-full object-cover rounded-lg mb-6"
            />

            {/* Book Details */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {book.title}
            </h2>
            <p className="text-gray-500 mb-4">by {book.name}</p>

            {/* Price */}
            {/* <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full w-fit">
              Free
            </span> */}

            {/* Action Button */}
            <button className="mt-auto px-5 py-2 rounded-xl text-white font-medium 
                               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                               shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Read Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freebooks;
