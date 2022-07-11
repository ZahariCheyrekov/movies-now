import { deleteMovie } from '../services/movieService';

export const deleteMovieHandler = () => {
    deleteMovie(movieCardId);
    console.log('Hi');
    // navigate('/movies');
}