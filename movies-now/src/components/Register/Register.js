import React from 'react';
import { register } from '../../services/userService';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    return (
        <div >
            <h3>Register</h3>
            <input
                placeholder="Email..."
                onChange={(ev) => setRegisterEmail(ev.target.value)}
            />
            <input placeholder="Password..."
                onChange={(ev) => setRegisterPassword(ev.target.value)}
            />

            <button onClick={() => register(registerEmail, registerPassword)}>Register</button>
        </div>
    )
}

export default Register;