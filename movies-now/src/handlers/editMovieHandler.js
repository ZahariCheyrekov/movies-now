import { editMovie } from "../services/movieService";
import { inputValidator } from "../validators/inputValidator";

export const editMovieHandler = (ev, movieCardId, navigate) => {
    ev.preventDefault();

    // console.log(ev.target.parentNode.parentNode)
    const form = ev.target.parentNode.parentNode;
    // console.log(form);

    const data = Object.fromEntries(new FormData(form));
    // console.log(data);

    const isValid = inputValidator(data);

    if (!isValid) {
        return;
    }

    editMovie(movieCardId, data);
    // console.log(`movies/details/${movieCardId}`)
    navigate(`/movies/details/${movieCardId}`);
}