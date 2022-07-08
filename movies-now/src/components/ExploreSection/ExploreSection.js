import sonicImg from '../../assets/sonic.png'

const ExploreSection = () => {
    return (
        <section className="explore-movies">
            <div className="explr-mv-wrapper">
                <article className="explr-mv-title">
                    <h2 className="site-ttl-sec">
                        Learn more about your favourite movies!
                    </h2>
                    <p className="site-p-sec">
                        A place to find information about new movies, shows and series.
                        Read about production process and actors experience.
                    </p>
                </article>

                <article className="explr-img-sec">
                    <img src={sonicImg} />
                </article>
            </div>
        </section>
    )
}

export default ExploreSection;