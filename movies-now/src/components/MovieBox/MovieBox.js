import React from 'react';
import { Link } from 'react-router-dom';

import './MovieBox.css';

const MovieBox = () => {
    return (
        <section className="movie-box-sec">
            <Link to="details/-N6YXgeVKKq_q_aF20Cr">
                <article className="banner-art-container">
                    <h2 className="banner-art-title">
                        Sonic the Hedgehog 2
                    </h2>

                    <p className="banner-art-text">
                        Sonic convinces Tails to help him find
                        the Master Emerald, while Robotnik reunites with his assistant Stone and,
                        scheming to steal the emerald, offers to help Knuckles.
                    </p>
                </article>
            </Link>
        </section>
    );
}

export default MovieBox;