import React from 'react';
import './Movies.css';
import MovieCard from '../MovieCard';

import { useState, useEffect } from 'react';
import useGenre from '../../hooks/useGenre';

import { getAllMovies } from '../../services/movieService';

import { toggleActiveStyle } from '../../utils/genreUtil';

const Movies = () => {
    const genres = useGenre();
    const [movies, setMovies] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('All');

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
            const movieGenres = Object.values(movie[1])[5];

            if (movieGenres.toUpperCase().includes(genre.toUpperCase())) {
                moviesByCategory.push(movie);
            }
        });
        setMovies(Object.values(moviesByCategory));
    }

    return (
        <>
            <div className="container">
                <div className="dropdown">
                    <section className="genre-options"
                        onClick={() => setIsActive(!isActive)}
                    >
                        {selected}
                        <i className="fa-solid fa-caret-down"></i>

                        {isActive &&
                            <ul className="mv-genres-ul">
                                {genres.map(genre => (
                                    <li
                                        key={genre}
                                        className={toggleActiveStyle(selected, genre)}
                                        onClick={() => {
                                            setSelected(genre);

                                            genre === 'All'
                                                ? getMovies()
                                                : getMoviesByGenre(genre);
                                        }}
                                    >{genre}
                                    </li>
                                ))}
                            </ul>
                        }
                    </section>
                </div>
            </div>

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