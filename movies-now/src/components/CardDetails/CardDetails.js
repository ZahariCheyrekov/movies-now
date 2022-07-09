import './CardDetails.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCardById } from '../../services/movieService';

const CardDetails = () => {
    const { movieCardId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        const movieById = await getMovieCardById(movieCardId);
        setMovie(movieById);
    }

    return (
        <article className="movie-card-details">
            <article className="mv-card-img-d">
                <img src={movie.imageUrl} />
            </article>

            <section className="mv-card-details-info">
                <h2 className="mv-card-ttl">
                    {movie.title}
                </h2>
                <h3 className="mv-card-type">
                    {movie.type}
                </h3>

                <p className="mv-card-description">
                    {movie.description}
                </p>

                <h4 className="mv-card-year">
                    {movie.year}
                </h4>
            </section>
        </article>
    );
}

export default CardDetails;