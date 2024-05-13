// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-272a9.firebaseapp.com",
  projectId: "mern-estate-272a9",
  storageBucket: "mern-estate-272a9.appspot.com",
  messagingSenderId: "208959541610",
  appId: "1:208959541610:web:e3460a3cf893ecdbfdd513",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
