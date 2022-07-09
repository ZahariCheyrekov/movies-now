import { useState, useEffect } from 'react';

import { getAllMovies } from '../../services/movieService';

import MovieCard from './MovieCard';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [genres] = useState(['All', 'Action', 'Adventure', 'Animation', 'Comedy', 'Fantasy', 'Horror']);
  
    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const moviesDb = await getAllMovies();
        setMovies(Object.entries(moviesDb));
    }




    const getMoviesByGenre = async (genre) => {
        const moviesDb = await getAllMovies();

        const moviesByCategory = [];
        Object.entries(moviesDb).forEach(movie => {
            const movieData = Object.values(movie[1]);

            for (const value of movieData) {
                if (typeof value === 'string') {
                    if (value.includes(genre)) {
                        moviesByCategory.push(movie);
                    }
                }
            }
        });

        setMovies(Object.values(moviesByCategory))
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
            </ul>
        </>
    );
}

export default Movies;