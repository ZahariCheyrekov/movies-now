import React from 'react';

import './MovieList.css';
import MovieCard from '../../MovieCard';

const MovieList = ({ movies }) => {
    return (
        <ul className="movies-list">
            {movies
                ? movies.map(movie =>
                    <MovieCard
                        key={movie[0]}
                        id={movie[0]}
                        movie={movie[1]}
                    />
                )
                : <li id="no-movies">No Movies</li>
            }
        </ul>
    );
}

export default MovieList;