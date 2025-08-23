// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw46ovXCoQZBYMqXy3s8RFNyIdBgz3sSs",
  authDomain: "loginapp-72658.firebaseapp.com",
  projectId: "loginapp-72658",
  storageBucket: "loginapp-72658.firebasestorage.app",
  messagingSenderId: "190560139214",
  appId: "1:190560139214:web:051009030d30861598dd9f",
  measurementId: "G-143WE8DE85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
