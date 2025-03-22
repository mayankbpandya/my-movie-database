import { useLoaderData } from "react-router-dom";
export const MovieDetails = () => {
    const moviesData = useLoaderData();
    const {Title, Year, imdbRating, Genre, Actors, Plot, Language, Country, Awards, Poster} = moviesData;
return (<div className="bg-gray-100 min-h-screen py-12 px-4 md:px-16">
        {/* Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden relative">
      
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-white hover:text-gray-500 transition text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
      
          {/* Movie Header */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Movie Poster */}
            <div className="flex justify-center items-center bg-gray-200">
              <img
                src={Poster}
                alt={Title}
                className="w-full h-full object-cover md:h-[500px]"
              />
            </div>
      
            {/* Movie Info */}
            <div className="col-span-2 p-8 space-y-6">
              <h1 className="text-4xl font-bold text-gray-800">{Title}</h1>
      
              {/* Movie Meta */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">{Genre}</span>
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">{Year}</span>

              </div>
      
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
               {Plot}
               </p>
      
              
            </div>
          </div>
      
          {/* Additional Info */}
          <div className="p-8 border-t mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      
            {/* Cast */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cast</h2>
              <ul className="space-y-2 text-gray-600">
                {Actors}
              </ul>
            </div>
      
            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ratings</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    {imdbRating}
                </div>
              </div>
            </div>
      
          </div>
      
        </div>
      </div>
    );
}