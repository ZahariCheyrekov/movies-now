import React from 'react';
import './Movies.css';

import { useState, useEffect } from 'react';

import { getAllMovies } from '../../services/movieService';

import MovieList from './MovieList/MovieList';
import MovieGenres from './MovieGenres/MovieGenres';

const Movies = () => {
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
                <section className="genre-options"
                    onClick={() => setIsActive(!isActive)}
                >
                    {selected}
                    <i className="fa-solid fa-caret-down"></i>

                    <MovieGenres
                        selected={selected}
                        setSelected={setSelected}
                        setMovies={setMovies}
                        isActive={isActive}
                        getMovies={getMovies}
                    />

                </section>
            </div>

            <MovieList movies={movies} />
        </>
    );
}

export default Movies;