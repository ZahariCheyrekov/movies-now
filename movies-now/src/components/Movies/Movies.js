import { useState, useEffect } from 'react';

import { getAllMovies } from '../../services/movieService';

import MovieCard from './MovieCard';
import './Movies.css';
import React from 'react';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [genres] = useState(['All', 'Action', 'Adventure', 'Animation', 'Comedy', 'Criminal', 'Drama', 'Fantasy', 'Horror']);
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    });

    useEffect(() => {
        getMovies();
        toggleActive(0);
    }, []);

    const getMovies = async () => {
        const moviesDb = await getAllMovies();
        setMovies(Object.entries(moviesDb));
    }

    const toggleActive = (index) => changeState({ ...appState, activeObject: appState.objects[index] });

    const toggleActiveStyles = (index) => {
        if (appState.objects[index] !== appState.activeObject) {
            return "mv-li-item";
        }

        return "mv-li-item actv"
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
                {appState.objects.map((_, index) => (
                    <li
                        key={index}
                        className={toggleActiveStyles(index)}
                        onClick={async () => {
                            index === 0
                                ? getMovies()
                                : getMoviesByGenre(genres[index]);

                            toggleActive(index);
                        }}
                    >{genres[index]}
                    </li>
                ))}
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
            <div>
            </div>
        </>
    );
}

export default Movies;