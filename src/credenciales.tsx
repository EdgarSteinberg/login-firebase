// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2maj6jOmcLlCQ3jI-6HsIRojRMbLpfOw",
  authDomain: "tutorial-login-49d51.firebaseapp.com",
  projectId: "tutorial-login-49d51",
  storageBucket: "tutorial-login-49d51.appspot.com",
  messagingSenderId: "969320178623",
  appId: "1:969320178623:web:53105bd9b2b7f0d7b0b70a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase