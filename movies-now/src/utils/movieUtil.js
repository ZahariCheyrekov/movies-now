import { getAllMovies } from '../services/movieService';

export const getMoviesByGenre = async (genre) => {
    const moviesDb = await getAllMovies();

    const moviesByCategory = [];
    Object.entries(moviesDb).forEach(movie => {
        const movieGenres = Object.values(movie[1])[5];

        if (movieGenres.toUpperCase().includes(genre.toUpperCase())) {
            moviesByCategory.push(movie);
        }
    });

    return Object.values(moviesByCategory);
}