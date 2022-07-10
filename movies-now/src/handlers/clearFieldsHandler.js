export const clearFieldsHandler = (ev) => {
    const createMovieForm = ev.currentTarget.parentNode.parentNode;
    createMovieForm.reset();
}