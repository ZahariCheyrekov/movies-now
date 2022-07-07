import { createNewMovie } from '../../services/movieService';
import './CreateMovie.css';

const CreateMovie = () => {
    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));
        createNewMovie(data);
    }

    return (
        <form onSubmit={onSubmitHandler} className="create-movie-form" method="POST">
                <h2>Create Movie</h2>

                <label htmlFor="movie-title">Title:</label>
                <input type="text" className="title-movie" name="title" placeholder="Enter movie title" />

                <label htmlFor="movie-type">Type:</label>
                <input type="text" className="type-movie" name="type" placeholder="Enter movie type" />

                <label htmlFor="movie-year">Year:</label>
                <input type="text" className="year-movie" name="year" placeholder="2010" />

                <label htmlFor="movie-img">Image url:</label>
                <input type="text" className="imageUrl-movie" name="imageUrl" placeholder="Upload movie photo" />

                <textarea name="description" className="description-movie" placeholder="Enter movie description"></textarea>
                <input className="btn submit" type="submit" value="Create Movie" />
        </form>
    );
}

export default CreateMovie;