import React from "react";

const books = [
  {
    id: 1,
    name: "Fyodor Dostoevsky",
    title: "Crime and Punishment",
    price: 399,
    category: "Classic Literature",
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
  },
  {
    id: 2,
    name: "Franz Kafka",
    title: "The Metamorphosis",
    price: "free",
    category: "Philosophical Fiction",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    name: "George Orwell",
    title: "1984",
    price: 299,
    category: "Dystopian",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 4,
    name: "Jane Austen",
    title: "Pride and Prejudice",
    price: "free",
    category: "Romance",
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
  },
  {
    id: 5,
    name: "J. R. R. Tolkien",
    title: "The Lord of the Rings",
    price: 599,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/8728696-L.jpg",
  },
  {
    id: 6,
    name: "Harper Lee",
    title: "To Kill a Mockingbird",
    price: 279,
    category: "Classic Fiction",
    image: "https://covers.openlibrary.org/b/id/8225264-L.jpg",
  },
  {
    id: 7,
    name: "Leo Tolstoy",
    title: "War and Peace",
    price: "free",
    category: "Historical",
    image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
  },
  {
    id: 8,
    name: "Ernest Hemingway",
    title: "The Old Man and the Sea",
    price: 199,
    category: "Novella",
    image: "https://covers.openlibrary.org/b/id/11153244-L.jpg",
  },
  {
    id: 9,
    name: "George Orwell",
    title: "1984",
    price: 249,
    category: "Dystopian",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
},
{
    id: 10,
    name: "Harper Lee",
    title: "To Kill a Mockingbird",
    price: 299,
    category: "Classic Literature",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
},
{
    id: 11,
    name: "Gabriel García Márquez",
    title: "One Hundred Years of Solitude",
    price: 349,
    category: "Magical Realism",
    image: "https://covers.openlibrary.org/b/id/9251836-L.jpg",
},
{
    id: 12,
    name: "J.D. Salinger",
    title: "The Catcher in the Rye",
    price: 279,
    category: "Classic Fiction",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
}

];

const BookCards = () => {
  return (
    <div className="mt-24 px-6 md:px-12 lg:px-20">
      {/* Heading & paragraph below navbar */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          Explore Our Collection
        </h1>
        <p className="text-emerald-500" >
          Discover free and paid books across different genres curated for you.
        </p>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {books.map((book) => (
    <div
      key={book.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover"  // smaller image height
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-amber-800">{book.title}</h2>
        <p className="text-gray-600 text-xs mt-1">by {book.name}</p>
        <p className="text-gray-500 text-xs">{book.category}</p>
        <p
          className={`mt-1 font-bold ${
            book.price === "free" ? "text-green-600" : "text-blue-600"
          }`}
        >
          {book.price === "free" ? "Free" : `₹${book.price}`}
        </p>
        <button className="mt-2 w-full bg-amber-400 text-white text-sm py-1.5 rounded-md hover:bg-blue-600">
          Read Now
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BookCards;
