import './Home.css';

import ExploreSection from '../ExploreSection';
import EnjoySection from '../EnjoySection';
import CreateSection from '../CreateSection';
import GallerySection from '../GallerySection';
import HeaderPoster from '../HeaderPoster/HeaderPoster';

const Home = () => {
    return (
        <>
            <HeaderPoster />

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