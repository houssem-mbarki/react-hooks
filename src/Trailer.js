import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Trailer({ moviesData }) {
  const { movieId } = useParams();
  return (
    <div>
      <button>
        <Link to="/" className="links">
          Home
        </Link>
      </button>
      {moviesData.find((film) => film.id === Number(movieId)).trailerURL}
      <h1>{moviesData.find((film) => film.id === Number(movieId)).description}</h1>
    </div>
  );
}

export default Trailer;
