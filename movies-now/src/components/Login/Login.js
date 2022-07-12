import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Login = () => {
    const [user, setUser] = useState({});
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

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

                <button onClick={login}>Login</button>
            </div>

            <div >
                <h3>Register</h3>
                <input
                    placeholder="Email..."
                    onChange={(ev) => setRegisterEmail(ev.target.value)}
                />
                <input placeholder="Password..."
                    onChange={(ev) => setRegisterPassword(ev.target.value)}
                />

                <button onClick={() => register()}>Register</button>
            </div>

            <button onClick={logout}>Logout</button>

            <h1>{user?.email} ({user?.accessToken})</h1>
        </>
    )
}

export default Login;