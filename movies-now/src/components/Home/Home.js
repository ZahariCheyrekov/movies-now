import './Home.css';

import ExploreSection from '../ExploreSection';
import EnjoySection from '../EnjoySection';
import CreateSection from '../CreateSection';

const Home = () => {
    return (
        <>
            <h1 className="home-title">
                Explore your favorite movies, shows and series.
            </h1>

            <ExploreSection />

            <EnjoySection />

            <CreateSection />
        </>
    );
}

export default Home;