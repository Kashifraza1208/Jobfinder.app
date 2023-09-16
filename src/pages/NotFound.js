import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">Page not found!😔</h1>
      <div className="bg-red-500 text-white font-bold text-4xl p-2 rounded-lg">
        <Link to="/" className="not-found-link">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
