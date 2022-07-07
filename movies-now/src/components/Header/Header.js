import './Header.css';
import popcornbag from '../../assets/popcorn-bag.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="site-header">
            <div className='header-wrapper'>
                <section className='header-logo-section'>
                    <h2 className="header-title">
                        Movies Now
                    </h2>

                    <article className="header-img-art">
                        <img src={popcornbag} />
                    </article>
                </section>

                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/create">Create Movie</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;