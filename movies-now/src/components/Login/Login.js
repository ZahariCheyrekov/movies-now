import { useState } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../services/userService';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    return (
        <form className="input-form" action="login-user">
            <h1 className="login-form-ttl frm-el">
                Login
            </h1>

            <label htmlFor="email" className="frm-el"><b>Email</b></label>
            <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                className="input-el frm-el"
                required
                onChange={(ev) => setLoginEmail(ev.target.value)}
            />

            <label htmlFor="psw" className="frm-el">
                <strong>
                    Password
                </strong>
            </label>
            <input
                type="password"
                placeholder="Password"
                name="psw"
                id="psw"
                className="input-el frm-el"
                required
                onChange={(ev) => setLoginPassword(ev.target.value)}
            />

            <button
                onClick={() => login(loginEmail, loginPassword)}
                className="loginbtn frm-el red-btn">Login</button>

            <p className="alrd-have-acc-txt">
                Dont't have an account?
                <Link className="frm-link" to="/register">
                    Register
                </Link>
            </p>
        </form>
    )
}

export default Login;