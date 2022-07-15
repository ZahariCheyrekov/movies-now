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
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
            navigate('/movies');
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    }
}

export const register = async (ev, registerEmail, registerPassword, repeatPassword, navigate) => {
    ev.preventDefault();

    const isVaid = inputValidator([registerEmail, registerPassword, repeatPassword])
        && passwordLengthValidator(repeatPassword)
        && passwordEqualityValidator(registerPassword, repeatPassword);

    if (isVaid) {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
            navigate('/movies');
        } catch (error) {
            alert(error.message);
            console.log(error.message);
        }
    }
}

export const logout = async () => {
    await signOut(auth);
}