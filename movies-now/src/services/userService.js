import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../src/firebase-config';
import { passwordValidator } from '../validators/passwordValidator';

export const login = async (loginEmail, loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const register = async (registerEmail, registerPassword, repeatPassword) => {
    const isVaid = passwordValidator(registerPassword, repeatPassword);

    if (!isVaid) {
        return;
    }

    try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const logout = async () => {
    await signOut(auth);
}