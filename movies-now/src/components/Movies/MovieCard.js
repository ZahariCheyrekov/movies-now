import './MovieCard.css';

import notFound from '../../assets/404.jpg';
import { getMovieCardById } from '../../services/movieService';

const MovieCard = ({
    id,
    movie
}) => {

    const clickHandler = async (ev) => {
        const movieCardId = ev.currentTarget.id;
        const movie = await getMovieCardById(movieCardId);
        console.log(movie);
    }

    console.log(movie);
    return (
        <li onClick={clickHandler}
            className="movie-card-element"
            id={id}
            key={id}
        >
            <img src={
                movie.imageUrl
                    ? movie.imageUrl
                    : notFound
            } alt="movie-poster" />

            <h2 className="movie-card-title mv-el">{movie.title}</h2>
            {/* <hr className='movie-hr' /> */}
            {/* <h3 className="movie-card-type mv-el">{movie.type}</h3> */}
            {/* <h3 className="movie-card-year mv-el">{movie.year}</h3> */}
            {/* <p className="movie-card-description">{movie.description}</p> */}
        </li>
    )
}

export default MovieCard;