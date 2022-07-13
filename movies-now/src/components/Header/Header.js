import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import popcornBag from '../../assets/popcorn-bag.png';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Header = () => {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser)
    });

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
                        ? userLinks()
                        : guestLinks()
                    }
                </nav>
            </div>
        </header>
    );
}

const userLinks = () => {
    return (
        <>
            <Link to="/create">Create Movie</Link>
            <Link to="/logout">Logout</Link>
        </>
    )
}

const guestLinks = () => {
    return (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    )
}

export default Header;