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
                <img src={movie.imageUrl} alt="Movie Poster" />
            </article>

            <section className="mv-card-details-info dt-el">
                <h2 className="mv-card-ttl">
                    {movie.title}
                </h2>
                <h3 className="mv-card-type dt-el">
                    {movie.type}
                </h3>

                <h3 className="mv-card-overview">Overview</h3>
                <p className="mvs-card-description dt-el" >
                    {movie.description}
                </p>

                <h4 className="mv-card-year dt-el">
                    {movie.year}
                </h4>
            </section>
        </article>
    );
}

export default CardDetails;