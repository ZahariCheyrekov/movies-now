import './Home.css';

import ExploreSection from '../ExploreSection';
import EnjoySection from '../EnjoySection';

const Home = () => {
    return (
        <>
            <h1 className="home-title">
                Explore your favorite movies, shows and series.
            </h1>

            <ExploreSection />

            <EnjoySection />
        </>
    );
}

export default Home;