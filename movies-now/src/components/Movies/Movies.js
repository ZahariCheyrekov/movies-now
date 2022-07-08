import { useState, useEffect } from 'react';

import { getAllMovies, getMoviesByTitle } from '../../services/movieService';

import MovieCard from './MovieCard';
import './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const moviesDb = await getAllMovies();
        setMovies(Object.entries(moviesDb));
    }

    const searchMovies = async (title) => {
        const moviesFromSearch = await getMoviesByTitle(title);
        setMovies(moviesFromSearch);
    }

    return (
        <>
            <input
                placeholder="Enter movie title"
                value={searchTerm}
                onChange={(ev) => setSearchTerm(ev.target.value)}>
            </input>

            <button onClick={() => searchMovies(searchTerm)}>Search</button>

            <ul className='movies-list'>
                {movies
                    ? movies.map(movie => < MovieCard key={movie[0]} id={movie[0]} movie={movie[1]} />)
                    : <li id='no-movies'>No Movies</li>
                }
                console.log(movie);
            </ul>

        </>
    );
}

export default Movies;