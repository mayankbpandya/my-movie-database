import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import AppLayout from "./components/AppLayout";
import  ErrorPage  from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { getMovieDetails } from "./api/GetMovieDetails";
import {MovieDetails} from "./pages/MovieDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:id",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
      ],
    },
 
  ]);
  return (
    <div className="container">
    <RouterProvider router={router} />
    </div>
  )
}
export default App;