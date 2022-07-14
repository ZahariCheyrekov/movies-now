import React, { useState } from 'react';
import './Register.css';

import { register } from '../../services/userService';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (

        <form action="action_page.php">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                    onChange={(ev) => setRegisterEmail(ev.target.value)}
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                    onChange={(ev) => setRegisterPassword(ev.target.value)}
                />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    id="psw-repeat"
                    required
                    onChange={(ev) => setRepeatPassword(ev.target.value)} />
                <hr />

                <p>By creating an account you agree to our <Link to="#">Terms  Privacy</Link>.</p>
                <button
                    onClick={(register(registerEmail, registerPassword, repeatPassword))}
                    type="button" className="registerbtn">Register</button>
            </div>

            <div className="container signin">
                <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
            </div>
        </form>

    );
}

export default Register;