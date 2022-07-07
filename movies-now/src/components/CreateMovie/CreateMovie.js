import { createNewMovie } from '../../services/movieService';

const CreateMovie = () => {
    const onSubmitHandler = (ev) => {
        ev.preventDefault();

        const data = Object.fromEntries(new FormData(ev.currentTarget));
        createNewMovie(data);
    }

    return (
        <form onSubmit={onSubmitHandler} id="create" method="POST">
            <div className="container">
                <h1>Create Game</h1>

                <label htmlFor="movie-title">Movie title:</label>
                <input type="text" id="title" name="title" placeholder="Enter movie title" />

                <label htmlFor="movie-type">Type:</label>
                <input type="text" id="type" name="type" placeholder="Enter movie type" />

                <label htmlFor="movie-year">Year:</label>
                <input type="text" id="year" name="year" placeholder="2010" />

                <label htmlFor="movie-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload movie photo" />

                <textarea name="description" id="description" placeholder="Enter movie description"></textarea>
                <input className="btn submit" type="submit" value="Create Movie" />
            </div>
        </form>
    );
}

export default CreateMovie;