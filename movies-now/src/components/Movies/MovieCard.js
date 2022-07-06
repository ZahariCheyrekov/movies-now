import './MovieCard.css';

const MovieCard = ({ movie }) => {
    console.log(movie);
    return (
        <li
            className="movie-card-element"
            id={movie.imdbID}>

            <img src={
                movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://miro.medium.com/max/1400/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg'
            } />

            <h2 className="movie-card-title">{movie.Title}</h2>
            <h3 className="movie-card-type">{movie.Type}</h3>
            <h3 className="movie-card-year">{movie.Year}</h3>
        </li>
    )
}

export default MovieCard;