// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFSt0W3Wgd48oD-xvbyRUkIDRNhELlxyA",
    authDomain: "doctors-portal-268b8.firebaseapp.com",
    projectId: "doctors-portal-268b8",
    storageBucket: "doctors-portal-268b8.appspot.com",
    messagingSenderId: "233805667518",
    appId: "1:233805667518:web:20ec9932e1b98b365212ef"
  };
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;