import './GallerySection.css';
import React from 'react';

import shazamImg from '../../assets/shazam.jpg';
import theMatrixImg from '../../assets/the-matrix.jpg';
import f9Img from '../../assets/f9.jpg';

const GallerySection = () => {
    return (
        <section className="explore-movies site-sec" >
            <div className="explr-mv-wrapper enj-secr">
                <article className="gallery-img-art">
                    <img src={shazamImg} className="gallery-img" alt="shazam" />
                </article>

                <article className="gallery-img-art">
                    <img src={theMatrixImg} className="gallery-img scl" alt="the-matrix" />
                </article>

                <article className="gallery-img-art">
                    <img src={f9Img} className="gallery-img" alt="fast-and-furious" />
                </article>
            </div>
        </section>
    );
}

export default GallerySection;