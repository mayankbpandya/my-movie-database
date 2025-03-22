import { NavLink } from "react-router-dom";
export const Card = ({allMovies}) => {
    const {Title,Poster,Year,Type, imdbID} = allMovies;
    return (
        <>
        <div className="card card-side bg-base-100 shadow-sm w-[28rem]">
  <figure>
    <img
      src={Poster}
      alt={Title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Title}</h2>
    <h3>{Year}</h3>
    <h4>{Type}</h4>
    <div className="card-actions">
      <NavLink to={`/movie/${imdbID}`}>
      <button className="btn btn-primary">Watch</button>
      </NavLink>
    </div>
  </div>
  </div>
            
        </>
    )
}