import './Home.css';

import ExploreSection from '../ExploreSection';
import EnjoySection from '../EnjoySection';
import CreateSection from '../CreateSection';
import GallerySection from '../GallerySection';
import Poster from '../Poster';

const Home = () => {
    return (
        <>
            <Poster />

            <h1 className="home-title">
                Explore your favorite movies, shows and series.
            </h1>

            <ExploreSection />

            <EnjoySection />

            <CreateSection />

            <GallerySection />
        </>
    );
}

export default Home;