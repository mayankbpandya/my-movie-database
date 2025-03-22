import { useLoaderData } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { getMoviesData } from "../api/GetAPIData"; // ← import your API call here
import { useState } from "react";
import { useCallback } from "react";
export const Movie = () => {
    // Initial data from loader
    const loaderMoviesData = useLoaderData()
  
    // URL search params for persistent state
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("s") || "comedy"
  
    // Component state
    const [moviesData, setMoviesData] = useState(loaderMoviesData)
    const [searchQuery, setSearchQuery] = useState(query)
    const [loading, setLoading] = useState(false)
  
    // Fetch movies when query changes
    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true)
        try {
          const data = await getMoviesData(`s=${query}`)
          setMoviesData(data)
        } catch (error) {
          console.error("Error fetching movies:", error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchMovies()
    }, [query])
  
    // Memoized search handler to prevent unnecessary re-renders
    const handleSearch = useCallback(() => {
      if (searchQuery.trim()) {
        setSearchParams({ s: searchQuery })
      }
    }, [searchQuery, setSearchParams])
  
    // Handle input change
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value)
    }
  
    // Handle key press for search
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    }
  
    return (
      <>
        {/* Search Box */}
        <div className="p-4 m-4 flex justify-center">
          <label className="input flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 bg-white w-full max-w-md">
            <SearchIcon />
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
              placeholder="Search movies..."
              aria-label="Search movies"
            />
            <button onClick={handleSearch} className="btn btn-primary px-3 py-1 text-white text-sm" aria-label="Search">
              Search
            </button>
          </label>
        </div>
  
        {/* Current Search Query Display */}
        {query && (
          <div className="text-center font-semibold mt-2">
            <p>
              Searched for: <span className="font-bold">{query}</span>
            </p>
          </div>
        )}
  
        {/* Loading Indicator */}
        {loading && (
          <div className="text-center text-gray-500">
            <span className="loading loading-infinity loading-xl" aria-label="Loading"></span>
          </div>
        )}
  
        {/* Movie Results */}
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50">
          {moviesData?.Search?.length > 0 ? (
            moviesData.Search.map((movie) => <Card key={movie.imdbID} allMovies={movie} />)
          ) : (
            <div className="text-gray-500 text-center w-full">{loading ? "Searching..." : "No movies found."}</div>
          )}
        </div>
      </>
    )
  }
  
  // Extracted search icon component for cleaner JSX
  const SearchIcon = () => (
    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
  )
  