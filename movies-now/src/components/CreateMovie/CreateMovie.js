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

            <label htmlFor="movie-title" className="title-m-label">Title:
                <input type="text" className="title-movie input-el-m" name="title"
                    placeholder="Sonic the Hedgehog 2" />
            </label>

            <label htmlFor="movie-type" className="type-m-label">Type:
                <input type="text" className="type-movie input-el-m" name="type"
                    placeholder="Action, Adventure, Comedy..." />
            </label>

            <label htmlFor="movie-year" className="year-m-label">Year:
                <input type="text" className="year-movie input-el-m" name="year"
                    placeholder="2022" />
            </label>

            <label htmlFor="movie-img" className="image-m-label">Image url:
                <input type="text" className="imageUrl-movie input-el-m" name="imageUrl"
                    placeholder="https://dx35vtwkllhj9.cloudfront.net..." />
            </label>

            <label htmlFor="movie-description" className="description-m-label">Description:
                <textarea name="description" className="description-movie input-el-m"
                    placeholder="Sonic the Hedgehog 2 is a 2022 action-adventure comedy film based on..."
                ></textarea>
            </label>

            <label htmlFor="clear-btn">
                <button type="submit" className="btn submit clr"> 
                    Clear
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </label>

            <label htmlFor="create-btn">
                <button type="submit" className="btn submit add-mv">
                    Add Movie
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </label>
        </form>
    );
}

export default CreateMovie;