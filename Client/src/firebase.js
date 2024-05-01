// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-dossier.firebaseapp.com",
  projectId: "tech-dossier",
  storageBucket: "tech-dossier.appspot.com",
  messagingSenderId: "705799078070",
  appId: "1:705799078070:web:4f4d88538d4f105c25e617",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
