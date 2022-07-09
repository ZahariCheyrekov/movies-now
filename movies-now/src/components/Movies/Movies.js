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
            <ul className="mv-genres-ul">
                <li
                    key={'All'}
                    onClick={() => getMovies()}
                    className="mv-li-item actv">
                    All
                </li>
                <li
                    key={'Action'}
                    onClick={() => getMoviesByGenre('Action')}
                    className="mv-li-item">
                    Action
                </li>
                <li
                    key={'Adventure'}
                    onClick={() => getMoviesByGenre('Adventure')}
                    className="mv-li-item">
                    Adventure</li>
                <li
                    key={'Animation'}
                    onClick={() => getMoviesByGenre('Animation')}
                    className="mv-li-item">
                    Animation</li>
                <li
                    key={'Comedy'}
                    onClick={() => getMoviesByGenre('Comedy')}
                    className="mv-li-item">
                    Comedy</li>
                <li
                    key={'Fantasy'}
                    onClick={() => getMoviesByGenre('Fantasy')}
                    className="mv-li-item">
                    Fantasy</li>
                <li
                    key={'Horror'}
                    onClick={() => getMoviesByGenre('Horror')}
                    className="mv-li-item">
                    Horror</li>
            </ul>

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