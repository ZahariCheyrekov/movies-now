const MovieCard = ({ movie }) => {
    return (
        <li
            id={movie.imdbID}
            >
            {movie.Title}
        </li>
    )
}

export default MovieCard;