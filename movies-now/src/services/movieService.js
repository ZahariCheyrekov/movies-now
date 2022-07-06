const baseUrl = 'http://www.omdbapi.com?apikey=5c5d0828&s=';

export const getMoviesByTitle = async (title) => {
    const res = await fetch(`${baseUrl}${title}`);
    const data = await res.json();

    return data.Search;
}