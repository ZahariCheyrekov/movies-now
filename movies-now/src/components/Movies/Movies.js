import { useState, useEffect } from 'react';
import useGenre from '../../hooks/useGenre';

import { getAllMovies } from '../../services/movieService';

import MovieCard from './MovieCard';
import './Movies.css';
import React from 'react';

const Movies = () => {
    const genres = useGenre();
    const [movies, setMovies] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('All');
    const [appState, changeState] = useState({
        activeObject: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }
            , { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }]
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
            const movieGenres = Object.values(movie[1])[5];

            if (movieGenres.toUpperCase().includes(genre.toUpperCase())) {
                moviesByCategory.push(movie);
            }
        });

        setMovies(Object.values(moviesByCategory))
    }

    return (
        <>
            <div className="container">
                <div className="dropdown">
                    <section className="genre-options" onClick={() => setIsActive(!isActive)}>
                        {selected}
                        <i className="fa-solid fa-caret-down"></i>
                        {isActive &&
                            <ul className="mv-genres-ul">
                                {appState.objects.map((_, index) => (
                                    <li
                                        key={index}
                                        className={toggleActiveStyles(index)}
                                        value={genres[index]}
                                        onClick={async () => {
                                            setSelected(genres[index]);

                                            index === 0
                                                ? getMovies()
                                                : getMoviesByGenre(genres[index]);

                                            toggleActive(index);
                                        }}
                                    >{genres[index]}
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
            <div>
            </div>
        </>
    );
}

export default Movies;