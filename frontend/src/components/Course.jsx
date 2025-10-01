import React from 'react'

const Course = () => {
  return (
    <div className="mt-36 text-center px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        We're delighted that you went <span className="text-amber-400">here :)</span>
      </h1>
      <p className="text-amber-300 text-2xl md:text-3xl mb-6">
        Explore amazing Books and start your journey <br />
        of learning something new <span>every day!</span>
      </p>
      <button className="bg-amber-300 text-gray-900 font-semibold text-lg md:text-xl px-6 mt-3.5 py-3 rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300 ease-in-out">
        Explore Books
      </button>

      {/* New line added here */}
      <p className="mt-5 text-gray-400 text-3xl">
        Start building your  library today 📚
      </p>
    </div>
  )
}

export default Course
