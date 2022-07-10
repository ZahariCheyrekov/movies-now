import React from 'react';

import './MovieBox.css';

const MovieBox = () => {
    return (
        <section className="movie-box-sec">
            <article className="banner-art-container">
                <h2 className="banner-art-title">
                    Sonic the Hedgehog 2
                </h2>

                <p className="banner-art-text">
                    Sonic is rescued by Miles "Tails" Prower, a two-tailed fox who idolizes him
                    and comes to warn him about Knuckles. Sonic convinces Tails to help him find
                    the Master Emerald, while Robotnik reunites with his assistant Stone and,
                    scheming to steal the emerald, offers to help Knuckles.
                </p>
            </article>
        </section>
    );
}

export default MovieBox;