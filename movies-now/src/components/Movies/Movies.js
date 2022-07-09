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
            <ul className="mv-genres-ul">
                <li className="mv-li-item actv">Action</li>
                <li className="mv-li-item">Adventure</li>
                <li className="mv-li-item">Animation</li>
                <li className="mv-li-item">Comedy</li>
                <li className="mv-li-item">Fantasy</li>
                <li className="mv-li-item">Horror</li>
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