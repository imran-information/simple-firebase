// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbadYSXwE-6KNarSrJM8E7afNImV2pXpg",
    authDomain: "simple-firebase-b8e71.firebaseapp.com",
    projectId: "simple-firebase-b8e71",
    storageBucket: "simple-firebase-b8e71.firebasestorage.app",
    messagingSenderId: "853417943636",
    appId: "1:853417943636:web:8e73d328126d41d4a683c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;