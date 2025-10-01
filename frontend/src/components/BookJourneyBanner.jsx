import React from "react";

const BookJourneyBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r py-12 px-6 mt-28">
      <h1 className="text-3xl font-bold text-center text-white mb-9">
        Top Genre Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
        
        {/* Fiction */}
        <div className="bg-indigo-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Fiction Books</h2>
          <p className="text-sm mb-4">
            Dive into imaginative worlds and unforgettable stories.
          </p>
          <img
            src="https://covers.openlibrary.org/b/id/10523361-L.jpg"
            alt="Fiction book"
            className="h-44 w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Spirituality */}
        <div className="bg-purple-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Spirituality Books</h2>
          <p className="text-sm mb-4">
            Explore wisdom, inner peace, and deeper understanding of life.
          </p>
          <img
            src="https://covers.openlibrary.org/b/id/240727-L.jpg"
            alt="Spirituality book"
            className="h-44 w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Self-help */}
        <div className="bg-pink-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Self-help Books</h2>
          <p className="text-sm mb-4">
            Gain motivation and strategies to grow into your best self.
          </p>
          <img
            src="https://covers.openlibrary.org/b/id/8375046-L.jpg"
            alt="Self-help book"
            className="h-44 w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Non-fiction */}
        <div className="bg-pink-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-2">Non-fiction Books</h2>
          <p className="text-sm mb-4">
            Discover real stories, facts, and knowledge from the world around us.
          </p>
          <img
            src="https://covers.openlibrary.org/b/id/9251990-L.jpg"
            alt="Non-fiction book"
            className="h-44 w-full object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default BookJourneyBanner;
