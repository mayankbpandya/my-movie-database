import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl md:text-3xl text-gray-600">Oops! Page not found.</p>
        <p className="text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <NavLink to={() => navigate(-1)} variant="outline">
            Go Back
          </NavLink>
          <NavLink to="/">Go Home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
