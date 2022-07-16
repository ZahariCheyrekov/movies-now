import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../src/firebase-config';

import { inputValidator } from '../validators/inputValidator';
import { passwordEqualityValidator, passwordLengthValidator } from '../validators/passwordValidator';

export const login = async (ev, loginEmail, loginPassword, navigate) => {
    ev.preventDefault();

    const isValid = inputValidator([loginEmail, loginPassword])
        && passwordLengthValidator(loginPassword);

    if (isValid) {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate('/movies');
        } catch (error) {
            alert(error.message);
            throw new Error(error.message);
        }
    }
}

export const register = async (ev, registerEmail, registerPassword, repeatPassword, navigate) => {
    ev.preventDefault();

    const isVaid = inputValidator([registerEmail, registerPassword, repeatPassword])
        && passwordLengthValidator(registerPassword)
        && passwordEqualityValidator(registerPassword, repeatPassword);

    if (isVaid) {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/movies');
        } catch (error) {
            alert(error.message);
            throw new Error(error.message);
        }
    }
}

export const logout = async () => {
    await signOut(auth);
}