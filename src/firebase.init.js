// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCic0rWSMbHCLLI97RBUEbEcfmjD9OLQ",
  authDomain: "wildlifephotographer-8038b.firebaseapp.com",
  projectId: "wildlifephotographer-8038b",
  storageBucket: "wildlifephotographer-8038b.appspot.com",
  messagingSenderId: "763837876562",
  appId: "1:763837876562:web:f9560dbbab5e9b31e3d28b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
