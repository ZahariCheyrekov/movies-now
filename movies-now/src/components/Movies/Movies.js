import { getMoviesByTitle } from "../../services/movieService";
import { useState, useEffect } from 'react';

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

            <ul>
                {movies
                    ? movies.map(
                        ({ Title, imdbID }) =>
                            <li key={imdbID}>{Title}</li>)
                    : <p>No Movies</p>
                }
            </ul>

            <button onClick={() => searchMovies(searchTerm)}></button>
        </>
    );
}

export default Movies;