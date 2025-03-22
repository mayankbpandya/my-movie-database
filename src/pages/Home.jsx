import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(./img/movie-theater.jpg)",
    }}>
    <div className="hero-overlay"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome to My Movie Database</h1>
        <p className="mb-5">
        Discover a world of movies at your fingertips! Explore the latest releases, timeless classics, and hidden gems. Dive into detailed movie info, watch trailers, and keep track of your favorites—all in one place.</p>
        <NavLink to="/movie"  className="btn btn-primary">Browse Movies</NavLink>
      </div>
    </div>
  </div>
  )
}