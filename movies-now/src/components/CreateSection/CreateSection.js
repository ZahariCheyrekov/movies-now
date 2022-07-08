import './CreateSection.css';

import filmFlap from '../../assets/film-flap.png';
import popcornBag from '../../assets/popcorn-bag.png';

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

                <article className="explr-img-sec flm-flp-img">
                    <img src={filmFlap} alt="film-flap" className="flm-flp" />
                    <img src={popcornBag} alt="popcorn-bag" className="popcorn-bag" />
                </article>
            </div>
        </section>
    );
}

export default CreateSection;