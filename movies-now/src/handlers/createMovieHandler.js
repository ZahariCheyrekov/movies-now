import { createNewMovie } from '../services/movieService';
import { inputValidator } from '../validators/inputValidator';

export const createMovieHandler = (ev, navigate) => {
    console.log();
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.currentTarget.parentNode.parentNode));

    const isValid = inputValidator(data);

    if (!isValid) {
        return;
    }

    data.likes = 0;

    createNewMovie(data);
    navigate('/movies')
}