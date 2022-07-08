import './EnjoySection.css';

import laptop from '../../assets/laptop.png';
import moviesNowImg from '../../assets/movies-now-img.png'

const EnjoySection = () => {
    return (
        <section className="explore-movies site-sec">
            <div className="explr-mv-wrapper enj-sec">
                <article className="explr-img-sec laptop-img">
                    <img src={laptop} alt="laptop" />
                    <img className="mv-now-img-abs" src={moviesNowImg} alt="Movies Now" />
                </article>

                <article className="explr-mv-content">
                    <h2 className="site-ttl-sec">
                        Remember to have fun.
                    </h2>
                    <p className="site-p-sec">
                        There are plenty of movies in the collection where you can
                        search for the ones you love.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default EnjoySection;