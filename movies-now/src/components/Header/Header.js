import React, { useContext } from 'react';

import './Header.css';

import popcornBag from '../../assets/popcorn-bag.png';

import { AuthContext } from '../../contexts/AuthContext';
import NavBar from '../NavBar';

const Header = () => {
    const user = useContext(AuthContext);

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

                <NavBar user={user} />
            </div>
        </header>
    );
}

export default Header;