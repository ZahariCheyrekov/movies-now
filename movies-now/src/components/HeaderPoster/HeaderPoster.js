import './HeaderPoster.css';

import moviesCollage from '../../assets/movies-collage.jpg'

const HeaderPoster = () => {
    return (
        <article className="mv-collage-img-art">
            <img src={moviesCollage} alt="movie-collage" />
        </article>
    )
}

export default HeaderPoster;