const Movies = () => {
    const getMovies = () => {
        return fetch('http://www.omdbapi.com?apikey=5c5d0828&s=Superman')
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <>
            <button onClick={getMovies}>Get Movies</button>
        </>
    );
}

export default Movies;