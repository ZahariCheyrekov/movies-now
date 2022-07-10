import React from 'react';
import './Movies.css';
import MovieCard from '../MovieCard';

import { useState, useEffect } from 'react';
import useGenre from '../../hooks/useGenre';

import { getAllMovies } from '../../services/movieService';

import { toggleActiveStyle } from '../../utils/genreUtil';
import { getMoviesByGenre } from '../../utils/movieUtil';
import MovieList from './MovieList/MovieList';

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
                                        onClick={async () => {
                                            setSelected(genre);

                                            if (genre === 'All') {
                                                getMovies();
                                            } else {
                                                const movies = await getMoviesByGenre(genre);
                                                setMovies(movies);
                                            }
                                        }}
                                    >{genre}
                                    </li>
                                ))}
                            </ul>
                        }
                    </section>
                </div>
            </div>

            <MovieList movies={movies} />
        </>
    );
}

export default Movies;