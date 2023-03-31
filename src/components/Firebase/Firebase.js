// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdcnVtaHgnnYj4UzqkmFcrJ9MciZGlLNw",
  authDomain: "zomato-c3757.firebaseapp.com",
  projectId: "zomato-c3757",
  storageBucket: "zomato-c3757.appspot.com",
  messagingSenderId: "205322943345",
  appId: "1:205322943345:web:19f39db5e861ec163414d0",
  measurementId: "G-QR5K2M8JEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};