import { DELETE_MOVIE_CONFIRM_MESSAGE } from '../messages/confirmMessage';
import { deleteMovie } from '../services/movieService';

export const deleteMovieHandler = (movieCardId, navigate) => {
    const confirmed = window.confirm(DELETE_MOVIE_CONFIRM_MESSAGE);

    if (confirmed) {
        deleteMovie(movieCardId);
        navigate('/movies');
    }
}