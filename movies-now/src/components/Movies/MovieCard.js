import './MovieCard.css';
import notFound from '../../assets/404.jpg';

const MovieCard = ({ key, id, movie }) => {
    console.log(movie);
    return (
        <li
            className="movie-card-element"
            id={id}
            key={key}
        >

            <img src={
                movie.imageUrl
                    ? movie.imageUrl
                    : notFound
            } alt="movie-poster" />

            <h2 className="movie-card-title mv-el">{movie.title}</h2>
            <hr className='movie-hr' />
            <h3 className="movie-card-type mv-el">{movie.type}</h3>
            <h3 className="movie-card-year mv-el">{movie.year}</h3>
        </li>
    )
}

export default MovieCard;