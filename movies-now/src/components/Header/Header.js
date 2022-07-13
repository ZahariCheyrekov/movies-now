import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import popcornBag from '../../assets/popcorn-bag.png';

import { logout } from '../../services/userService';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
    const user = useContext(UserContext);

    return (
        <header className="site-header">
            <div className='header-wrapper'>
                <section className='header-logo-section'>
                    <h2 className="header-title">
                        Movies Now
                    </h2>

                    <article className="header-img-art">
                        <img src={popcornBag} alt="popcorn-bag" />
                    </article>
                </section>

                <nav className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>

                    {user
                        ? <>
                            <Link to="/create">Create Movie</Link>
                            <Link onClick={logout} to="/">Logout</Link>
                        </>
                        : <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
}

export default Header;