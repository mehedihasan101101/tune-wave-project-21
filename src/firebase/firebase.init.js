// for learning purpose i am using it in the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKqOkf6KKyUKmMhEkxEoaFiLzUgrtvbLw",
    authDomain: "tune-wave-9e51a.firebaseapp.com",
    projectId: "tune-wave-9e51a",
    storageBucket: "tune-wave-9e51a.firebasestorage.app",
    messagingSenderId: "230291127780",
    appId: "1:230291127780:web:b6cf7a2c83d22784d01bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;