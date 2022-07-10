import { createNewMovie } from '../services/movieService';
import { inputValidator } from '../validators/inputValidator';

import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from '../messages/alertMessages';

export const createMovieHandler = (ev) => {
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.currentTarget));

    const isValid = inputValidator(data);

    if (!isValid) {
        alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
        return;
    }

    data.likes = 0;

    createNewMovie(data);
    ev.target.reset();
}