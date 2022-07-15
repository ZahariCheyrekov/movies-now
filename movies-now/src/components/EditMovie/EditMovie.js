import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCardById } from "../../services/movieService";

const EditMovie = () => {
    const { movieCardId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie();
    });

    const getMovie = async () => {
        const movieById = await getMovieCardById(movieCardId);
        setMovie(movieById);
    }

    return (
        <form className="create-movie-form updt-frm" >
            <h2 className="create-movie-title">Edit Movie</h2>

            <label htmlFor="movie-title" className="title-m-label">Title:
                <input type="text" className="title-movie input-el-m" name="title" defaultValue={movie.title} />
            </label>

            <label htmlFor="movie-type" className="type-m-label">Type:
                <input type="text" className="type-movie input-el-m" name="type" defaultValue={movie.type} />
            </label>

            <label htmlFor="movie-year" className="year-m-label">Year:
                <input type="text" className="year-movie input-el-m" name="year" defaultValue={movie.year} />
            </label>

            <label htmlFor="movie-img" className="image-m-label">Image url:
                <input type="text" className="imageUrl-movie input-el-m" name="imageUrl" defaultValue={movie.imageUrl} />
            </label>

            <label htmlFor="movie-trailer" className="trailer-m-label">Trailer url:
                <input type="text" className="trailerUrl-movie input-el-m" name="trailerUrl" defaultValue={movie.trailerUrl} />
            </label>

            <label htmlFor="movie-description" className="description-m-label">Description:
                <textarea name="description" className="description-movie input-el-m" defaultValue={movie.description}
                ></textarea>
            </label>

            <label htmlFor="update-btn">
                <button className="btn submit updt-mv">
                    Update
                    <i className="fa-solid fa-pen"></i>
                </button>
            </label>
        </form>
    );
}

export default EditMovie;