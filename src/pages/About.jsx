export const About = () => {
    return (
        <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold text-primary">My Movie Database</span>, your ultimate destination for everything movies! Whether you're a casual viewer, a film buff, or someone looking for their next movie night pick, we've got you covered.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is simple: to make discovering, exploring, and enjoying movies easy and fun. From the latest blockbusters to timeless classics, we bring you a comprehensive collection of films from around the world. Each movie comes with detailed information, trailers, reviews, and ratings to help you make the best choice.
          </p>
          <p className="text-lg text-gray-600">
            At <span className="font-semibold text-primary">My Movie Database</span>, we believe movies have the power to inspire, entertain, and bring people together. That’s why we’re passionate about providing a space where everyone can find something they love.
          </p>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">🎥 Vast Collection</h3>
              <p className="text-sm text-gray-600">Thousands of movies across all genres to explore.</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">🌍 Global Reach</h3>
              <p className="text-sm text-gray-600">Hollywood, Bollywood, indie gems, and world cinema.</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">⭐ Curated Content</h3>
              <p className="text-sm text-gray-600">Honest reviews, ratings, and recommendations you can trust.</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">🕶️ User-Friendly</h3>
              <p className="text-sm text-gray-600">Simple, clean, and intuitive interface for smooth browsing.</p>
            </div>
          </div>
      
          <p className="text-md text-gray-500 pt-10 italic">
            "For the love of movies, all in one place."
          </p>
        </div>
      </div>
      
    )
  }