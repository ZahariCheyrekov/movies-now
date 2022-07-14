import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../src/firebase-config';
import { inputValidator } from '../validators/inputValidator';

import { passwordValidator } from '../validators/passwordValidator';

export const login = async (loginEmail, loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const register = async (registerEmail, registerPassword, repeatPassword, ev, navigate) => {
    ev.preventDefault();

    const isVaid = inputValidator([registerEmail, registerPassword, repeatPassword])
        && passwordValidator(registerPassword, repeatPassword);

    if (isVaid) {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
            navigate('/movies');
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const logout = async () => {
    await signOut(auth);
}