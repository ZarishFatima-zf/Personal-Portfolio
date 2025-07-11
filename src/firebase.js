import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCo0zCoW1HPvp8VpHvO3C5LPM2vG91uJsc",
  authDomain: "contactform-portfolio-90806.firebaseapp.com",
  projectId: "contactform-portfolio-90806",
storageBucket: "contactform-portfolio-90806.appspot.com",
  messagingSenderId: "152020492626",
  appId: "1:152020492626:web:01bf1845e8459a2ec8da8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }