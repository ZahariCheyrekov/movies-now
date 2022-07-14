import React, { useState } from 'react';
import './Register.css';

import { register } from '../../services/userService';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <form className="input-form" action="register-user">
            <h1 className="register-form-ttl frm-el">Register</h1>
            <p className="register-form-create-accnt frm-el">Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="email" className="frm-el"><b>Email</b></label>
            <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                className="input-el frm-el"
                required
                onChange={(ev) => setRegisterEmail(ev.target.value)}
            />

            <label htmlFor="psw" className="frm-el"><b>Password</b></label>
            <input
                type="password"
                placeholder="Password"
                name="psw"
                id="psw"
                className="input-el frm-el"
                required
                onChange={(ev) => setRegisterPassword(ev.target.value)}
            />

            <label htmlFor="psw-repeat frm-el"><b>Repeat Password</b></label>
            <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                className="input-el frm-el"
                required
                onChange={(ev) => setRepeatPassword(ev.target.value)} />
            <hr />

            <button
                onClick={() => register(registerEmail, registerPassword, repeatPassword)}
                className="registerbtn frm-el">Register</button>

            <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
        </form>

    );
}

export default Register;