import { createNewMovie } from '../services/movieService';
import { inputValidator } from '../validators/inputValidator';
import { yearValidator } from '../validators/yearValidator';

export const createMovieHandler = (ev, navigate) => {
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.currentTarget.parentNode.parentNode));
    const isValid = inputValidator(data) && yearValidator(data.year);

    if (!isValid) {
        return;
    }

    createNewMovie(data);
    navigate('/movies')
}