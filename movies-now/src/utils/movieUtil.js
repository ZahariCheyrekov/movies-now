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

export const getMoviesByTitle = async (title) => {
    const moviesDb = await getAllMovies();

    const moviesByTitle = [];
    Object.entries(moviesDb).forEach(movie => {
        const movieTitle = Object.values(movie[1])[3];

        if (movieTitle.toUpperCase().includes(title.toUpperCase())) {
            moviesByTitle.push(movie);
        }
    });

    return Object.values(moviesByTitle);
}