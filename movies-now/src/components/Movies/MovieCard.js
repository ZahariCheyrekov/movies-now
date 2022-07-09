import './MovieCard.css';
import React from 'react';
import notFound from '../../assets/404.jpg';

import { Link } from 'react-router-dom';

const MovieCard = ({
    id,
    movie
}) => {
    return (
        <Link className="movie-card-link" to={`details/${id}`} >
            <li
                className="movie-card-element"
                id={id}
                key={id}
            >
                <img src={
                    movie.imageUrl
                        ? movie.imageUrl
                        : notFound
                }
                    alt="movie-poster"
                />
                <h2 className="movie-card-title mv-el">{movie.title}</h2>
            </li >
        </Link>
    )
}

export default MovieCard;