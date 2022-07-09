import './CardDetails.css';

import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { deleteMovie, getMovieCardById } from '../../services/movieService';

const CardDetails = () => {
    let navigate = useNavigate();

    const { movieCardId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie();
    }, []);

    const getMovie = async () => {
        const movieById = await getMovieCardById(movieCardId);
        setMovie(movieById);
    }

    const deleteMovieHandler = () => {
        deleteMovie(movieCardId);
        navigate('/movies');
    }

    return (
        <>
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

                    <button onClick={deleteMovieHandler} className="dtls-del-btn">
                        Delete
                    </button>

                </section>
            </article>

            <section className="mv-dtls-video">
                {movie.trailerUrl
                    ? <ReactPlayer
                        url={movie.trailerUrl}
                    />
                    : <h2 style={{ color: "white" }}>
                        No trailer
                    </h2>
                }
            </section>
        </>
    );
}

export default CardDetails;