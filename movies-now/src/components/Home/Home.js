import './Home.css';
import ExploreSection from '../ExploreSection/';

const Home = () => {
    return (
        <>
            <h1 className="home-title">
                Explore your favorite movies, shows and series.
            </h1>

            <ExploreSection />
        </>
    );
}

export default Home;