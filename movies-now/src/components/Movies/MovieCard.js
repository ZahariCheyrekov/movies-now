import './MovieCard.css';
import notFound from '../../assets/404.jpg';

const MovieCard = ({ movie }) => {
    console.log(movie);
    return (
        <li
            className="movie-card-element"
            id={movie.imdbID}>

            <img src={
                movie.Poster !== 'N/A'
                    ? movie.Poster
                    : notFound
            } />

            <h2 className="movie-card-title mv-el">{movie.Title}</h2>
            <hr className='movie-hr' />
            <h3 className="movie-card-type mv-el">{movie.Type}</h3>
            <h3 className="movie-card-year mv-el">{movie.Year}</h3>
        </li>
    )
}

export default MovieCard;