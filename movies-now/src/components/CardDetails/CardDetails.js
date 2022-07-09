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
        </article>
    );
}

export default CardDetails;