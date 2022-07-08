import './EnjoySection.css';

import filmFlap from '../../assets/film-flap.png';
import popcornBag from '../../assets/popcorn-bag.png';

const EnjoySection = () => {
    return (
        <section className="explore-movies site-sec">
            <div className="explr-mv-wrapper enj-sec">
                <article className="explr-img-sec flm-flp-img">
                    <img src={filmFlap} alt="film-flap" className="flm-flp" />
                    <img src={popcornBag} alt="popcorn-bag" className="popcorn-bag" />
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