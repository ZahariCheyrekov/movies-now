import peopleImg from '../../assets/people-talking.png';

const EnjoySection = () => {
    return (
        <section className="explore-movies site-sec">
            <div className="explr-mv-wrapper">
                <article className="explr-img-sec">
                    <img src={peopleImg} />
                </article>

                <article className="explr-mv-content">
                    <h2 className="site-ttl-sec">
                        Remember to have fun.
                    </h2>
                    <p className="site-p-sec">
                      They are plenty of movies in the collection where you can
                      search for the ones you love.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default EnjoySection;