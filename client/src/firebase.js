// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6067a.firebaseapp.com",
  projectId: "mern-estate-6067a",
  storageBucket: "mern-estate-6067a.appspot.com",
  messagingSenderId: "760110911976",
  appId: "1:760110911976:web:87e6652ec46655aa7f945d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
