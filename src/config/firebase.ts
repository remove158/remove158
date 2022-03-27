// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDMqRWepA3qaq3oggQ-0D-Je83yczN4BTg",
	authDomain: "github-pages-2405b.firebaseapp.com",
	projectId: "github-pages-2405b",
	storageBucket: "github-pages-2405b.appspot.com",
	messagingSenderId: "56707531599",
	appId: "1:56707531599:web:14ca6a079966dd35cefb3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider);
};
