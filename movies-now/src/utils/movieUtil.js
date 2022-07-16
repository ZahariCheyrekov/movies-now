import { getAllMovies } from '../services/movieService';

const movieData = {
    description: 0,
    imageUrl: 1,
    likes: 2,
    title: 3,
    trailerUrl: 4,
    type: 5,
    year: 6,
}

export const getMoviesByData = async (data, movieDataType) => {
    const moviesDb = await getAllMovies();

    const moviesByTitle = [];
    Object.entries(moviesDb).forEach(movie => {
        const movieDataNumber = movieData[movieDataType];
        const movieTitle = Object.values(movie[1])[movieDataNumber];

        if (movieTitle.toUpperCase().includes(data.toUpperCase())) {
            moviesByTitle.push(movie);
        }
    });

    return Object.values(moviesByTitle);
}