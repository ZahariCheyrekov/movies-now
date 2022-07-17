import { INVALID_MOVIE_YEAR_INPUT_MESSAGE } from "../messages/alertMessages";

export const yearValidator = (year) => {
    const currentYear = new Date().getFullYear();

    if (Number(year) < 1888 || Number(year) > currentYear) {
        alert(INVALID_MOVIE_YEAR_INPUT_MESSAGE);
        return false;
    }

    return true;
}