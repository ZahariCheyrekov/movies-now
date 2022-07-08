import './CreateSection.css';

import laptop from '../../assets/laptop.png';
import moviesNowImg from '../../assets/movies-now-img.png'

const CreateSection = () => {
    return (
        <section className="explore-movies site-sec">
            <div className="explr-mv-wrapper">
                <article className="explr-mv-content">
                    <h2 className="site-ttl-sec">
                        Create your own content.
                    </h2>
                    <p className="site-p-sec">
                        Create your own unique content and start showing
                        it to friends and other active users.
                    </p>
                </article>

                 <article className="explr-img-sec laptop-img">
                    <img src={laptop} alt="laptop" />
                    <img className="mv-now-img-abs" src={moviesNowImg} alt="Movies Now" />
                </article>
            </div>
        </section>
    );
}

export default CreateSection;