import React from 'react'

const Authors = () => {
  return (
    <div className="h-72 w-full overflow-hidden bg-amber-600 py-6 mt-28">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-white mb-6">
        Top Rated Authors
      </h1>

      {/* Authors */}
      <div className="flex animate-scroll space-x-20">
        <img
          src="https://i.pinimg.com/736x/07/97/18/079718248bce5f526e46d285b918e810.jpg"
          alt="book1"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://i.pinimg.com/1200x/df/81/b4/df81b493c74a0a5bb95b58a369858369.jpg"
          alt="book2"
          className="h-44 rounded-xl shadow-lg "
        />
        <img
          src="https://i.pinimg.com/736x/4a/c2/f1/4ac2f1883b35028f60bbd6cdbdb57020.jpg"
          alt="book3"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src='https://i.pinimg.com/736x/52/31/44/5231443e18cf6f2d99643f41db8f5ed7.jpg'
          alt="book4"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src='https://i.pinimg.com/736x/d1/5b/f5/d15bf5fbbee78f6aa05ae6a52cfc1557.jpg' alt="book5"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://i.pinimg.com/736x/55/de/0f/55de0fc4822dfc3f998ffef2cd44fa60.jpg"
          alt="book6"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src='https://i.pinimg.com/736x/c2/3d/91/c23d912b44b8ead2e34d1aa7608d12a5.jpg'
          alt="book7"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://i.pinimg.com/1200x/bb/ab/62/bbab62ea64e9fd2cce7080b6c0016d36.jpg"
          alt="book8"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src='https://i.pinimg.com/736x/a4/83/8a/a4838ac0bbfaa2299ce0ab5b96a91190.jpg'
          alt="book9"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src='https://i.pinimg.com/736x/5e/e8/0b/5ee80b2dee30c0d590b4fa1ff8625675.jpg'
          alt="book10"
          className="h-44 rounded-xl shadow-lg"
        />
        

        {/* Duplicate images for smooth loop */}
        <img
          src="https://i.pinimg.com/1200x/bb/ab/62/bbab62ea64e9fd2cce7080b6c0016d36.jpg"
          alt="book1"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://covers.openlibrary.org/b/id/240727-L.jpg"
          alt="book2"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://covers.openlibrary.org/b/id/8375046-L.jpg"
          alt="book3"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://covers.openlibrary.org/b/id/12658324-L.jpg"
          alt="book4"
          className="h-44 rounded-xl shadow-lg"
        />
        <img
          src="https://covers.openlibrary.org/b/id/12853256-L.jpg"
          alt="book5"
          className="h-44 rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Authors
