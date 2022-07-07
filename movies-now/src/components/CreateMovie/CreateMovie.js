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
            <h2 className="create-movie-title">Create Movie</h2>

            <label htmlFor="movie-title">Title:</label>
            <input type="text" className="title-movie input-el-m" name="title" placeholder="Sonic the Hedgehog 2" />

            <label htmlFor="movie-type">Type:</label>
            <input type="text" className="type-movie input-el-m" name="type" placeholder="Action, Adventure, Comedy..." />

            <label htmlFor="movie-year">Year:</label>
            <input type="text" className="year-movie input-el-m" name="year" placeholder="2022" />

            <label htmlFor="movie-img">Image url:</label>
            <input type="text" className="imageUrl-movie input-el-m" name="imageUrl" placeholder="https://dx35vtwkllhj9.cloudfront.net..." />

            <label htmlFor="movie-description">Description:</label>
            <textarea name="description" className="description-movie input-el-m" placeholder="Sonic the Hedgehog 2 is a 2022 action-adventure comedy film based on the video game series published by Sega..."></textarea>
            <input className="btn submit" type="submit" value="Create Movie" />
        </form>
    );
}

export default CreateMovie;