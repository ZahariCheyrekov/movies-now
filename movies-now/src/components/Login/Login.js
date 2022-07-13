import { useState } from 'react';

import { login } from '../../services/userService';

const Login = ({ setUser }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    return (
        <>
            <div >
                <h3>Login</h3>
                <input
                    placeholder="Email..."
                    onChange={(ev) => setLoginEmail(ev.target.value)}
                />
                <input
                    placeholder="Password..."
                    onChange={(ev) => setLoginPassword(ev.target.value)}
                />

                <button onClick={() => login(loginEmail, loginPassword, setUser)}>Login</button>
            </div>
        </>
    )
}

export default Login;