import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWivNqnUcsADi5DazS5zNwefCUX8BYJ2A",
    authDomain: "blog-web-site-90d69.firebaseapp.com",
    projectId: "blog-web-site-90d69",
    storageBucket: "blog-web-site-90d69.appspot.com",
    messagingSenderId: "195804946236",
    appId: "1:195804946236:web:97c73e33b263fc8fb38839"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        })
        .catch((err) => {
            console.log(err)
        })

    return user;
}