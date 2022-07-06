const baseUrl = 'http://www.omdbapi.com?apikey=5c5d0828&s=';

export const getMoviesByTitle = (title) =>
    fetch(`${baseUrl}${title}`)
        .then(res => res.json())
        .then(data => console.log(data));