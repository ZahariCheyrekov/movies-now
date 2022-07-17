import { useState } from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../services/userService';

const NavBar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="header-nav" >
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
    );
}

export default NavBar;