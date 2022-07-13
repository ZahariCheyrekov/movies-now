import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../src/firebase-config';

export const login = async (loginEmail, loginPassword) => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}



