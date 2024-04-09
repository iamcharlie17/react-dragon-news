// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD3kC3atdzQZ5Wc-y3zzWw9zDUjrp0gKY",
  authDomain: "react-dragon-news-7c37e.firebaseapp.com",
  projectId: "react-dragon-news-7c37e",
  storageBucket: "react-dragon-news-7c37e.appspot.com",
  messagingSenderId: "1071284761775",
  appId: "1:1071284761775:web:bda9c23ab1ab23102f105a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;