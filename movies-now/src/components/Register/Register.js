import React, { useState } from 'react';
import './Register.css';

import { register } from '../../services/userService';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <form className="input-form" action="register-user">
            <h1 className="register-form-ttl frm-el">
                Register
            </h1>
            <p className="register-form-create-accnt frm-el">
                Please fill in this form to create an account.
            </p>

            <label htmlFor="email" className="frm-el">
                <strong>
                    Email
                </strong>
            </label>
            <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                className="input-el frm-el"
                required
                onChange={(ev) => setRegisterEmail(ev.target.value)}
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
                onChange={(ev) => setRegisterPassword(ev.target.value)}
            />

            <label htmlFor="psw-repeat"
                className="frm-el">
                <strong>
                    Repeat Password
                </strong>
            </label>
            <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                className="input-el frm-el"
                required
                onChange={(ev) => setRepeatPassword(ev.target.value)}
            />

            <button
                onClick={(ev) => register(registerEmail, registerPassword, repeatPassword, ev, navigate)}
                className="registerbtn frm-el red-btn">
                Register
            </button>

            <p className="alrd-have-acc-txt">
                Already have an account?
                <Link className="frm-link" to="/login">
                    Login
                </Link>
            </p>
        </form>
    );
}

export default Register;