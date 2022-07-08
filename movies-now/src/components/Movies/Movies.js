import { useState, useEffect } from 'react';

import { getAllMovies } from '../../services/movieService';

import MovieCard from './MovieCard';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const moviesDb = await getAllMovies();
        setMovies(Object.entries(moviesDb));
    }

    return (
        <>
            <ul className='movies-list'>
                {movies
                    ? movies.map(movie =>
                        <MovieCard
                            key={movie[0]}
                            id={movie[0]}
                            movie={movie[1]}
                        />
                    )
                    : <li id='no-movies'>No Movies</li>
                }
                console.log(movie);
            </ul>

        </>
    );
}

export default Movies;