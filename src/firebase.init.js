// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY7xNQq68vzIYw6RZNemCIqWwdKKCXOcU",
  authDomain: "doctor-strange-990c8.firebaseapp.com",
  projectId: "doctor-strange-990c8",
  storageBucket: "doctor-strange-990c8.appspot.com",
  messagingSenderId: "674846837897",
  appId: "1:674846837897:web:3fe59f1a8c3f2e25b68a58"
  };
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;