import { createNewMovie } from '../services/movieService';
import { inputValidator } from '../validators/inputValidator';

export const createMovieHandler = (ev, navigate) => {
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.currentTarget.parentNode.parentNode));
    const isValid = inputValidator(data);

    if (!isValid) {
        return;
    }

    createNewMovie(data);
    navigate('/movies')
}