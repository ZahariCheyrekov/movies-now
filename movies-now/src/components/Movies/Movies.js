import { useState, useEffect } from 'react';

import { getMoviesByTitle } from '../../services/movieService';

import MovieCard from './MovieCard';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setMovies(getMoviesByTitle(searchTerm).Search);
    }, []);

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

            <ul>
                {movies
                    ? movies.map(movie => <MovieCard movie={movie} />)
                    : <li id='no-movies'>No Movies</li>
                }
            </ul>

        </>
    );
}

export default Movies;