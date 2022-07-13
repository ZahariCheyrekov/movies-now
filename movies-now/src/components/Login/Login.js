import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { login, logout } from '../../services/userService';

const Login = () => {
    const [user, setUser] = useState({});
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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

                <button onClick={() => login(loginEmail, loginPassword)}>Login</button>
            </div>

            <button onClick={logout}>Logout</button>

            <h1>{user?.email} ({user?.accessToken})</h1>
        </>
    )
}

export default Login;