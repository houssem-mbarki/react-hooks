import React from "react";
import { Link } from "react-router-dom";
import Rate from "../Rate";

import "./MovieCard.css";

const MovieCard = ({movie}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={movie.image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{movie.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={movie.rating} />
        </div>
        <div className="card_right__review">
          <p>{movie.description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
        <button >

          <Link to={`/Trailer/${movie.id}`}>go to trailer</Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;